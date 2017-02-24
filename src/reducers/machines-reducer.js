import { ADD_VENDING_MACHINE } from '../actions/action-types';

const initialState = {
  machines: []
};

const machinesReducer = function(state = initialState, action) {
  switch(action.type) {
    case ADD_VENDING_MACHINE:
      return Object.assign({}, state, { machines: [...state.machines, {}] });
  }

  return state;
}

export default machinesReducer;