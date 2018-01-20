

const GET_INGREDIENTS = 'GET_INGREDIENTS'

const defaultIngredients = []

export const addIngredients = ingredients => ({type: GET_INGREDIENTS, ingredients})

export const fetchRequiredIngredients = (cocktailObj) =>
    (dispatch, getState) => {
        let ingredientsArray = []
        let state = getState()
        fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailObj.idDrink}`)
        .then(response => response.json())
        .then(foundCocktail => {
            // let drinkObj = foundCocktail.drinks[0]
            // let keysArr = Object.keys(drinkObj)
            // for ( let i=1; i < 27; i++){
            //     console.log("drinkObj[keysArr[i]] ", drinkObj[keysArr[i]])
            //     if (drinkObj[keysArr[i]] ){
            //         console.log('INSIDE THE FIRST IF')
            //         if (drinkObj[i].startsWith('strIngredient')){
            //             console.log("Inside ingredient thing ",drinkObj[keysArr[i]])
            //         }
            //         }
            //     }
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient1)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient2)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient3)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient4)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient5)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient6)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient7)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient8)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient9)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient10)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient11)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient12)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient13)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient14)
            ingredientsArray.push(foundCocktail.drinks[0].strIngredient15)
            return ingredientsArray
        })
        .then(nonemptyIngredients => {
            console.log("INGREDIENTS LIST ", nonemptyIngredients)
            // console.log("state: ", state)

        dispatch(addIngredients(nonemptyIngredients))
        })
        .catch(err => console.log(err))
    }

export default function (state = defaultIngredients, action){
    switch (action.type){
        case GET_INGREDIENTS:
            return [...action.ingredients]
        default:
        return state
    }
}
