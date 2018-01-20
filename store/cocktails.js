const ADD_COCKTAILS = 'ADD_COCKTAILS'
const REMOVE_COCKTAIL = 'REMOVE_COCKTAIL'

const defaultCocktails = []

export const addCocktail = cocktailList => ({type: ADD_COCKTAILS, cocktailList})
export const removeCocktail = cocktail => ({type: REMOVE_COCKTAIL, cocktail})

export const fetchCocktailThunk = (listOfBooze) =>
   dispatch => {
        const fetchAllPromiseArray = [], promiseArray = []
        listOfBooze.forEach(base => {
            let promise = fetch(`http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${base}`) 
            .then(response =>  response.json())
            .then((foundCocktails) => {
                return foundCocktails.drinks
            })
            .catch(err => console.log(err))
            fetchAllPromiseArray.push(promise)
        })
        Promise.all(fetchAllPromiseArray)
        .then(resolvedArray => {
            let allCocktails = []
            if (resolvedArray.length === 1){
                resolvedArray[0].forEach(drink => {
                    if (drink.strDrinkThumb !== null){
                        allCocktails.push(drink)
                    }
                })
           }
            else {
                resolvedArray.forEach(base => {
                    base.forEach(drink => {
                        if (drink.strDrinkThumb !== null){
                            allCocktails.push(drink)
                        }
                    })
                })
            }
        dispatch(addCocktail(allCocktails))
        })
        .catch(err => console.log(err))
   }

export default function (state = defaultCocktails, action){
    switch (action.type){
        case ADD_COCKTAILS:
            return [...action.cocktailList].sort((a, b) => a.strDrink > b.strDrink)

        case REMOVE_COCKTAIL:
            return [...state.slice(0, state.indexOf(action.cocktail)), ...state.slice(state.indexOf(action.cocktail) + 1)]
        default:
            return state
    }
}