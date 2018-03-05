const ADD_TO_AVAILABLE_BOOZE = 'ADD_TO_AVAILABLE_BOOZE'
const REMOVE_BOOZE = 'REMOVE_BOOZE'

const defaultAvailableBooze = []

export const addToAvailableBooze = booze => {
    let boozeToAdd = [booze]
    let returnObj = {type: ADD_TO_AVAILABLE_BOOZE}
    switch (booze){
        case 'light rum':
            returnObj.boozeToAdd = [...boozeToAdd, 'rum', 'white rum']
            return returnObj
        case 'dark rum':
            returnObj.boozeToAdd = [...boozeToAdd, 'rum', 'spiced rum', 'añejo rum']
            return returnObj
        case 'coconut rum':
            returnObj.boozeToAdd = [...boozeToAdd, 'malibu rum']
            return returnObj
        case 'vodka':
            returnObj.boozeToAdd = [...boozeToAdd, 'absolut vodka']
            return returnObj
        case 'apple brandy':
            returnObj.boozeToAdd  = [...boozeToAdd, 'applejack']
            return returnObj
        case 'cherry brandy':
            returnObj.boozeToAdd  = [...boozeToAdd, 'Cherry Heering']
            return returnObj
        case 'whiskey':
            returnObj.boozeToAdd  = [...boozeToAdd, 'johnnie walker', 'irish whiskey', 'blended whiskey', 'jack daniels', 'crown royal', 'southern comfort', 'whisky']
            return returnObj
        case 'bourbon':
            returnObj.boozeToAdd = [...boozeToAdd, 'wild turkey', 'jim beam']
            return returnObj
        case 'orange liqueur':
            returnObj.boozeToAdd  = [ 'grand marnier', 'triple sec', 'cointreau']
            return returnObj
        case 'almond liqueur':
            returnObj.boozeToAdd  = ['amaretto']
            return returnObj
        case 'anise liqueur':
            returnObj.boozeToAdd  = ['sambuca', 'ricard', 'black sambuca', 'ouzo']
            return returnObj
        case 'coffee liqueur':
            returnObj.boozeToAdd  = [...boozeToAdd, 'kahlua']
            return returnObj 
        case 'chocolate liqueur':
            returnObj.boozeToAdd  = [...boozeToAdd, 'creme de cacao', 'Godiva liqueur']
            return returnObj
        case 'irish cream':
            returnObj.boozeToAdd  = [...boozeToAdd, 'baileys irish cream', "bailey's irish cream"]
            return returnObj
        case 'creme de menthe':
            returnObj.boozeToAdd  = ['white creme de menthe', 'green creme de menthe']
            return returnObj
        case 'cinnamon schnapps':
            returnObj.boozeToAdd  = ['firewater', 'goldschlager', 'hot damn']
            return returnObj
        case 'peach schnapps':
            returnObj.boozeToAdd = [...boozeToAdd, 'peachtree schnapps']
            return returnObj
        case 'beer':
            returnObj.boozeToAdd  = [...boozeToAdd, 'lager', 'ale']
            return returnObj
        default:
            returnObj.boozeToAdd = [...boozeToAdd]
            return returnObj
    }
}
    
export const removeFromAvailableBooze = booze => {
    let boozeToRemove = [booze]
    let returnObj = {type: REMOVE_BOOZE}
    switch (booze){
        case 'light rum':
            returnObj.boozeToRemove = [...boozeToRemove, 'rum', 'white rum']
            return returnObj
        case 'dark rum':
            returnObj.boozeToRemove = [...boozeToRemove, 'rum', 'spiced rum', 'añejo rum']
            return returnObj
        case 'coconut rum':
            returnObj.boozeToRemove = [...boozeToRemove, 'malibu rum']
            return returnObj
        case 'vodka':
            returnObj.boozeToRemove = [...boozeToRemove, 'absolut vodka']
            return returnObj
        case 'apple brandy':
            returnObj.boozeToRemove  = [...boozeToRemove, 'applejack']
            return returnObj
        case 'cherry brandy':
            returnObj.boozeToRemove  = [...boozeToRemove, 'Cherry Heering']
            return returnObj
        case 'whiskey':
            returnObj.boozeToRemove  = [...boozeToRemove, 'johnnie walker', 'irish whiskey', 'blended whiskey', 'jack daniels', 'crown royal', 'southern comfort', 'whisky']
            return returnObj
        case 'bourbon':
            returnObj.boozeToRemove = [...boozeToRemove, 'wild turkey', 'jim beam']
            return returnObj
        case 'orange liqueur':
            returnObj.boozeToRemove  = ['grand marnier', 'triple sec', 'cointreau']
            return returnObj
        case 'almond liqueur':
            returnObj.boozeToRemove  = ['amaretto']
            return returnObj
        case 'anise liqueur':
            returnObj.boozeToRemove  = ['sambuca', 'ricard', 'black sambuca', 'ouzo']
            return returnObj
        case 'coffee liqueur':
            returnObj.boozeToRemove  = [...boozeToRemove, 'kahlua']
            return returnObj 
        case 'chocolate liqueur':
            returnObj.boozeToRemove  = [...boozeToRemove, 'creme de cacao', 'Godiva liqueur']
            return returnObj
        case 'irish cream':
            returnObj.boozeToRemove  = [...boozeToRemove, 'baileys irish cream', "bailey's irish cream"]
            return returnObj
        case 'creme de menthe':
            returnObj.boozeToRemove  = ['white creme de menthe', 'green creme de menthe']
            return returnObj
        case 'cinnamon schnapps':
            returnObj.boozeToRemove  = ['firewater', 'goldschlager', 'hot damn']
            return returnObj
        case 'peach schnapps':
            returnObj.boozeToRemove = [...boozeToRemove, 'peachtree schnapps']
            return returnObj
        case 'beer':
            returnObj.boozeToRemove  = [...boozeToRemove, 'lager', 'ale']
            return returnObj
        default:
            returnObj.boozeToRemove = [...boozeToRemove]
            return returnObj
    }
}

export default function (state = defaultAvailableBooze, action){
    switch (action.type){
        case ADD_TO_AVAILABLE_BOOZE:
            return [...state, ...action.boozeToAdd]
        case REMOVE_BOOZE:
            return [...state.slice(0, state.indexOf(action.boozeToRemove[0])), ...state.slice(state.indexOf(action.boozeToRemove[action.boozeToRemove.length-1]) + 1)]
        default:
            return state
    }
}
