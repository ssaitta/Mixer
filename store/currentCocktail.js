const SET_CURRENT_COCKTAILS = 'SET_CURRENT_COCKTAILS'

const defaultCocktail = {}

export const setCurrentCocktail = cocktail => ({type: SET_CURRENT_COCKTAILS, cocktail})

export const fetchOneCocktailThunk = (cocktailId) =>
dispatch => {
    fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`) 
    .then(response =>  response.json())
    .then((foundCocktail) => {
        return foundCocktail.drinks[0]
    })
    .then((currentCocktail) => {
        let ingredientList = [], measurementList = []
        for (let i = 1; i < 16; i++) {
            let ingredient = `strIngredient${i}`
            let measure = `strMeasure${i}`
            if (typeof (currentCocktail[ingredient]) === 'string' && currentCocktail[ingredient].length > 0) {
                ingredientList.push(currentCocktail[ingredient])
                measurementList.push(currentCocktail[measure])
            }
        }
        return {
                strDrink: currentCocktail.strDrink,
                strDrinkThumb: currentCocktail.strDrinkThumb,
                strGlass: currentCocktail.strGlass,
                directions: currentCocktail.strInstructions,
                ingredientList: ingredientList,
                measurementList: measurementList
            }
    })
    .then(cocktailObj => {
        dispatch(setCurrentCocktail(cocktailObj))
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
