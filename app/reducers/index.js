import { combineReducers } from 'redux';
import {budgetReducer} from './budgetReducer'

export default combineReducers({
    budgetItem: budgetReducer
});