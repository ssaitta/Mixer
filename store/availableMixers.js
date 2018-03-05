const ADD_TO_AVAILABLE_MIXERS = 'ADD_TO_AVAILABLE_MIXERS'
const REMOVE_MIXER = 'REMOVE_MIXER'

const defaultAvailableMixer = ['sugar', 'water', 'ice', 'demerara sugar', 'salt', 'sugar syrup']

export const addToAvailableMixer = mixer => {
    let mixerToAdd = [mixer]
    let returnObj = {type: ADD_TO_AVAILABLE_MIXERS}
    switch (mixer){
        case 'lime':
            returnObj.mixerToAdd = [...mixerToAdd, 'sour mix', 'lime juice']
            return returnObj
        case 'lemon':
            returnObj.mixerToAdd = [...mixerToAdd, 'sour mix', 'lemon juice', 'lemon peel']
            return returnObj
        case 'egg':
            returnObj.mixerToAdd = [...mixerToAdd, 'egg yolk', 'egg white']
            return returnObj
        case 'hot sauce':
            returnObj.mixerToAdd = ['tabasco sauce']
            return returnObj
        default:
            returnObj.mixerToAdd = [...mixerToAdd]
            return returnObj
    }
}
export const removeFromAvailableMixer = mixer => {
    let mixerToRemove = [mixer]
    let returnObj = {type: REMOVE_MIXER}
    switch (mixer){
        case 'lime':
            returnObj.mixerToRemove = [...mixerToRemove, 'sour mix', 'lime juice']
            return returnObj
        case 'lemon':
            returnObj.mixerToRemove = [...mixerToRemove, 'sour mix', 'lemon juice', 'lemon peel']
            return returnObj
        case 'egg':
            returnObj.mixerToRemove = [...mixerToRemove, 'egg yolk', 'egg white']
            return returnObj
        case 'hot sauce':
            returnObj.mixerToRemove = ['tabasco sauce']
            return returnObj
        default:
            returnObj.mixerToRemove = [...mixerToRemove]
            return returnObj
    }
}

export default function (state = defaultAvailableMixer, action){
    switch (action.type){
        case ADD_TO_AVAILABLE_MIXERS:
            return [...state, ...action.mixerToAdd]
        case REMOVE_MIXER:
            return [...state.slice(0, state.indexOf(action.mixerToRemove[0])), ...state.slice(state.indexOf(action.mixerToRemove[action.mixerToRemove.length-1]) + 1)]
        default:
            return state
    }
}