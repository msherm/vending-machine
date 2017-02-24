import { combineReducers } from 'redux';

// Reducers
import machinesReducer from './machines-reducer';

// Combine Reducers
var reducers = combineReducers({
		machines: machinesReducer
});

export default reducers;