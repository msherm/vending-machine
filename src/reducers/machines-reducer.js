import { ADD_VENDING_MACHINE, ADD_ROW, ADD_COLUMN, ADD_SLOT, ADD_PRODUCT } from '../actions/action-types';

const initialState = {
  machines: []
};

const machinesReducer = function(state = initialState, action) {
  const machines = state.machines.slice();
  switch(action.type) {
    case ADD_VENDING_MACHINE:
      machines.push({ rows: [] });
      return Object.assign({}, state, { machines: machines });
    case ADD_ROW:
      //add row at machines[machineIndex]
      machines[action.machineIndex].rows.push({ columns: [] });
      return Object.assign({}, state, { machines: machines });
    case ADD_COLUMN:
      //add column at machines[machineIndex][rowIndex]
      machines[action.machineIndex].rows[action.rowIndex].columns.push({ slots: [] });
      return Object.assign({}, state, { machines: machines });
    case ADD_SLOT:
      //add slot at machines[machineIndex][rowIndex][columnIndex]
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots.push(0);
      return Object.assign({}, state, { machines: machines });
    case ADD_PRODUCT:
      //add product at machines[machineIndex][rowIndex][columnIndex][slotIndex]
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots[action.slotIndex] = action.productId;
      return Object.assign({}, state, { machines: machines });
  }

  return state;
}

export default machinesReducer;