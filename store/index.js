import {createStore, combineReducers, applyMiddleware } from 'redux'
import availableBooze from './availableBooze'
import availableMixers from './availableMixers'
import cocktails from './cocktails'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    availableBooze,
    availableMixers,
    cocktails
})

const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware
))

const store = createStore(reducer, middleware)

export default store
export * from './availableBooze'
export * from './availableMixers'
export * from './cocktails'
