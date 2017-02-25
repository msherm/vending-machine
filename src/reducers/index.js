import { combineReducers } from 'redux';

// Reducers
import machinesReducer from './machines-reducer';

// Combine Reducers
var reducers = combineReducers({
		machinesState: machinesReducer
});

export default reducers;