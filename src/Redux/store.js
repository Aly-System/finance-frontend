import { createStore, combineReducers } from 'redux'
import isLogged from './Reducers/isLogged'

const reducer = combineReducers({
    isLogged
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store