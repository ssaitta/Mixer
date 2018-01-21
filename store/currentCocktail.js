const SET_CURRENT_COCKTAILS = 'SET_CURRENT_COCKTAILS'
//const REMOVE_COCKTAIL = 'REMOVE_COCKTAIL'

const defaultCocktail = {}

export const setCurrentCocktail = cocktail => ({type: SET_CURRENT_COCKTAILS, cocktail})
//export const removeCocktail = cocktail => ({type: REMOVE_COCKTAIL, cocktail})

export const fetchOneCocktailThunk = (cocktailId) =>
dispatch => {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`) 
    .then(response =>  response.json())
    .then((foundCocktail) => {
        return foundCocktail.drinks[0]
    })
    .then((currentCocktail)=> {
        dispatch(setCurrentCocktail(currentCocktail))
    })
    .catch(err => console.log(err))
}

export default function (state = defaultCocktail, action){
    switch (action.type){
        case SET_CURRENT_COCKTAILS:
            return action.cocktail
        default:
            return state
    }
}
