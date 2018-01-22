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
            let indicesToRemove = []
            let cockatilIds = allCocktails.map(drink => {
                return drink.idDrink
            })

            let filteredIds = cockatilIds.filter((drink, index) => {
                if(cockatilIds.indexOf(drink) !== index){
                    indicesToRemove.push(index)
                    return false
                }
            })

            indicesToRemove.forEach(ind => {
                allCocktails[ind] = false
                return
            })
            
            let unique = allCocktails.filter((drink, index) => {
                return drink !== false
            })
        return unique
        })
        .then( allCocktails => {
            allCocktails.forEach(drink => {
                let promise = fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`)
                .then(response => response.json())
                .then(foundCocktail => {
                    return foundCocktail.drinks
                })
                .catch(err => console.log(err))
                promiseArray.push(promise)
            })
            Promise.all(promiseArray)
            .then(resolvedArray => {
                let allCocktailsDetailed = []
                if (resolvedArray.length === 1){
                    allCocktailsDetailed.push(resolvedArray[0])
                }
                else {
                    resolvedArray.forEach(drink => {
                        allCocktailsDetailed.push(drink)
                    })
                }
            return allCocktailsDetailed  //this needs to be checked for dublicates
            })
            .then(allCocktailsDetailed => {
                const cocktailObj = allCocktailsDetailed.map( drink => {
                    const currentCocktail = drink[0]
                    let ingredientList = [], ingredientListA = [], ingredientListM = []
                    for (let i = 1; i < 16; i++) {
                        let ingredent = `strIngredient${i}`
                        if (typeof (currentCocktail[ingredent]) === 'string' && currentCocktail[ingredent].length > 0) {
                            ingredientList.push(currentCocktail[ingredent])
                        }
                    }
                    ingredientList.forEach(ingredient => {
                        if(booze.indexOf(ingredient) !== -1){
                            ingredientListA.push(ingredient)
                        }
                        else{
                            ingredientListM.push(ingredient)
                        }
                    })

                    return {
                            idDrink: currentCocktail.idDrink,
                            strDrink: currentCocktail.strDrink,
                            strDrinkThumb: currentCocktail.strDrinkThumb,
                            strGlass: currentCocktail.strGlass,
                            directions: currentCocktail.strInstructions,
                            ingredientListA: ingredientListA,
                            ingredientListM: ingredientListM
                        }
                })
                dispatch(addCocktail(cocktailObj))
            })

        })
        .catch(err => console.log(err))
   }

export const filterCockatils = (cocktailObj) =>
(dispatch, getState) => {
    let startingCocktail = cocktailObj
    let state = getState()
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailObj.idDrink}`)
    .then(response => response.json())
    .then(foundCocktail => {
        currentCocktail = foundCocktail.drinks[0]
        let ingredentList = []
        for (let i = 1; i < 16; i++) {
            let ingredent = `strIngredient${i}`
            if (typeof (currentCocktail[ingredent]) === 'string' && currentCocktail[ingredent].length > 0) {
                ingredentList.push(currentCocktail[ingredent])
            }
        }
        return ingredentList
    })
    .then(nonemptyIngredients => {
        nonemptyIngredients.forEach(ingredient => {
            if (booze.indexOf(ingredient) !== -1 && state.availableBooze.indexOf(ingredient) === -1){
                dispatch(removeCocktail(startingCocktail))
            }
        })
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


const booze = ['Light rum'
        , 'Dark rum'
        , 'Añejo rum'
        , 'Rum'
        , 'Lemon vodka'
        , 'Vodka'
        , 'Applejack'
        , 'Apricot brandy'
        , 'Brandy'
        , 'Blended whiskey'
        , 'Apple brandy'
        , 'Cherry brandy'
        , 'Coffee brandy'
        , 'Gin'
        , 'Scotch'
        , 'Southern Comfort'
        , 'Bourbon'
        , 'Irish whiskey'
        , 'Tequila'
        , 'Champagne'
        , 'Port'
        , 'Red wine'
        , 'Sherry'
        , 'Sweet Vermouth'
        , 'Dry Vermouth'
        , 'Triple sec'
        , 'Amaretto'
        , 'Coffee liqueur'
        , 'Kahlua'
        , 'Creme de Cacao'
        , 'Ricard'
        , 'Strawberry schnapps'
        , 'Cider'
        , 'Beer'
        , 'Dubonnet Rouge'
        , 'Cognac'
        , 'Sloe gin'
        , 'Galliano'
        , 'Peach Vodka'
        , 'Ouzo'
        , 'Spiced rum'
        , 'Johnnie Walker'
        , 'Everclear'
        , 'Firewater'
        , 'Lager'
        , 'Whiskey'
        , 'Absolut Citron'
        , 'Pisco'
        , 'Irish cream'
        , 'Ale'
        , 'Chocolate liqueur'
        , 'Midori melon liqueur'
        , 'Sambuca'
        , 'Cider'
        , 'Blackberry brandy'
        , 'Peppermint schnapps'
        , 'Creme de Cassis'
        , 'Jack Daniels'
        , "Bailey's irish cream"
        , '151 proof rum'
        , 'Absolut Vodka'
        , 'Goldschlager'
        , 'Crown Royal'
        , 'Cointreau'
        , 'Vermouth'
        , 'Advocaat'
        , 'Absolut Kurant'
        , 'Beer'
        , 'Cherry Heering'
        , 'White Creme de Menthe'
        , 'Malibu rum'
        , 'Vanilla vodka'
        , 'Jägermeister'
        , 'Kiwi liqueur'
        , 'Grand Marnier'
        , 'Cachaca'
        , 'Peachtree schnapps'
        , 'Wild Turkey'
        , 'Cranberry vodka'
        , 'Corona'
        , 'Yukon Jack'
        , 'Coconut rum'
        , 'Banana liqueur'
        , 'Black Sambuca'
        , 'Hot Damn'
        , 'Campari'
        , 'Absinthe'
        , 'Whisky'
        , 'Guinness stout'
        , 'Chambord raspberry liqueur'
        , 'Jim Beam'
        , 'Godiva liqueur'
        , 'Baileys irish cream'
        , 'Zima'
        , 'Blue Curacao'
        , 'Maui'
        , 'Frangelico'
        , 'Bacardi Limon'
        , 'Raspberry vodka'
        , 'Green Creme de Menthe'
        , 'Prosecco'
        , 'White Rum'
        , 'Mezcal'
        , 'Green Chartreuse'
        , 'Peach schnapps'
]