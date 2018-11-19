import {createStore,combineReducers} from 'redux'
import loginReducer from './reducers/loginReducer'

let rootReducer={
    login:loginReducer
}
let reducer=combineReducers(rootReducer)
const store=createStore(reducer)
export default store 