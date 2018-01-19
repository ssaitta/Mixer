const FETCH_COCKTAILS = 'FETCH_COCKTAILS'
const REMOVE_COCKTAIL = 'REMOVE_COCKTAIL'

const defaultCocktails = []

const fetchCocktail = cocktail => ({type: FETCH_COCKTAILS, cocktail})
const removeCocktail = cocktail => ({type: REMOVE_COCKTAIL, cocktail})

export const fetchCocktailThunk = (cocktail) =>
   dispatch => {
        dispatch(fetchCocktail(cocktail))
    }

export const removeCocktailThunk = (cocktail) =>
dispatch => {
        dispatch(removeCocktail(cocktail))
    }


export default function (state = defaultCocktails, action){
    switch (action.type){
        case FETCH_COCKTAILS:
            return [...action.cocktail].sort((a, b) => a.strDrink > b.strDrink)
        case REMOVE_COCKTAIL:
            return [...state.slice(0, state.indexOf(action.cocktail)), ...state.slice(state.indexOf(action.cocktail) + 1)]
        default:
            return state
    }
}