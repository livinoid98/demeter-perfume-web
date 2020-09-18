import {combineReducers} from 'redux'
import user from './user'
import perfume from './perfume'
import memory from './memory'

const rootReducer = combineReducers({
    user,
    perfume,
    memory,
});

export default rootReducer;