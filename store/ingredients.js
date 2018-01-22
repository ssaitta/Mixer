// const GET_INGREDIENTS = 'GET_INGREDIENTS'

// const defaultIngredients = []

// export const addIngredients = ingredients => ({type: GET_INGREDIENTS, ingredients})

// export const fetchRequiredIngredients = (cocktailObj) =>
//     (dispatch, getState) => {
//         let ingredientsArray = []
//         let state = getState()
//         fetch(`http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailObj.idDrink}`)
//         .then(response => response.json())
//         .then(foundCocktail => {
//             const currentCocktail = foundCocktail.drinks[0]
//             let ingredentList = []
//             for (let i = 1; i < 16; i++) {
//                 let ingredent = `strIngredient${i}`
//                 if (typeof (currentCocktail[ingredent]) === 'string' && currentCocktail[ingredent].length > 0) {
//                     ingredentList.push(currentCocktail[ingredent])
//                 }
//             }
//             return ingredentList
//         })
//         .then(nonemptyIngredients => {
//             console.log("INGREDIENTS LIST ", nonemptyIngredients)
//             nonemptyIngredients.forEach(ingredient => {
//                 if(booze.indexOf(ingredient) !== -1){
//                     //check if it is available
//                     // state.availableBooze
//                 }
//             })

//         dispatch(addIngredients(nonemptyIngredients))
//         })
//         .catch(err => console.log(err))
//     }

// export default function (state = defaultIngredients, action){
//     switch (action.type){
//         case GET_INGREDIENTS:
//             return [...action.ingredients]
//         default:
//         return state
//     }
// }
