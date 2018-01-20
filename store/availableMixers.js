const ADD_TO_AVAILABLE_MIXERS = 'ADD_TO_AVAILABLE_MIXERS'
const REMOVE_MIXER = 'REMOVE_MIXER'

const defaultAvailableMixer = []

export const addToAvailableMixer = mixer => ({type: ADD_TO_AVAILABLE_mixer, mixer})
export const removeFromAvailableMixer = mixer => ({type: REMOVE_MIXER, mixer})

export default function (state = defaultAvailableMixer, action){
    switch (action.type){
        case ADD_TO_AVAILABLE_MIXERS:
            return [...state, action.mixer]
        case REMOVE_MIXER:
            return [...state.slice(0, state.indexOf(action.mixer)), ...state.slice(state.indexOf(action.mixer) + 1)]
        default:
            return state
    }
}