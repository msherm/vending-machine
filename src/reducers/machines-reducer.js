import { ADD_VENDING_MACHINE, ADD_ROW, ADD_COLUMN, ADD_SLOT, ADD_PRODUCT } from '../actions/action-types';

const initialState = {
  machines: []
};

const machinesReducer = function(state = initialState, action) {
  switch(action.type) {
    case ADD_VENDING_MACHINE:
      return Object.assign({}, state, { machines: [...state.machines, { rows: [] }] });
    case ADD_ROW:
      //add row at machines[machineIndex]
    case ADD_COLUMN:
      //add column at machines[machineIndex][rowIndex]
    case ADD_SLOT:
      //add slot at machines[machineIndex][rowIndex][columnIndex]
    case ADD_PRODUCT:
      //add product at machines[machineIndex][rowIndex][columnIndex][slotIndex]
  }

  return state;
}

export default machinesReducer;