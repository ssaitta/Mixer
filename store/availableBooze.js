const ADD_TO_AVAILABLE_BOOZE = 'ADD_TO_AVAILABLE_BOOZE'
const REMOVE_BOOZE = 'REMOVE_BOOZE'

const defaultAvailableBooze = []

const addToAvailableBooze = booze => ({type: ADD_TO_AVAILABLE_BOOZE, booze})
const removeFromAvailableBooze = booze => ({type: REMOVE_BOOZE, booze})

export const addBoozeThunk = (booze) =>
   dispatch => {
        dispatch(addToAvailableBooze(booze))
    }

export const removeBoozeThunk = (booze) =>
dispatch => {
        dispatch(removeFromAvailableBooze(booze))
    }


export default function (state = defaultAvailableBooze, action){
    switch (action.type){
        case ADD_TO_AVAILABLE_BOOZE:
            return [...state, action.booze]
        case REMOVE_BOOZE:
            return [...state.slice(0, state.indexOf(action.booze)), ...state.slice(state.indexOf(action.booze) + 1)]
        default:
            return state
    }
}