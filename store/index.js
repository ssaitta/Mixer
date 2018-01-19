import {createStore, combineReducers, applyMiddleware } from 'redux'
import availableBooze from './availableBooze'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    availableBooze
})

const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware
))

const store = createStore(reducer, middleware)

export default store
export * from './availableBooze'
