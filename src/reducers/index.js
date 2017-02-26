import { combineReducers } from 'redux';

// Reducers
import productsReducer from './products-reducer';
import machinesReducer from './machines-reducer';

// Combine Reducers
var reducers = combineReducers({
		productsState: productsReducer,
		machinesState: machinesReducer
});

export default reducers;