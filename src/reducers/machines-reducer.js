import { ADD_VENDING_MACHINE, ADD_ROW, REMOVE_ROW, ADD_COLUMN, REMOVE_COLUMN, ADD_SLOT, REMOVE_SLOT, ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/action-types';

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
    case REMOVE_ROW:
      machines[action.machineIndex].rows = [...machines[action.machineIndex].rows.slice(0, action.rowIndex), ...machines[action.machineIndex].rows.slice(action.rowIndex + 1)];
      return Object.assign({}, state, { machines: machines });
    case ADD_COLUMN:
      //add column at machines[machineIndex][rowIndex]
      machines[action.machineIndex].rows[action.rowIndex].columns.push({ slots: [] });
      return Object.assign({}, state, { machines: machines });
    case REMOVE_COLUMN:
      machines[action.machineIndex].rows[action.rowIndex].columns = [...machines[action.machineIndex].rows[action.rowIndex].columns.slice(0, action.columnIndex), ...machines[action.machineIndex].rows[action.rowIndex].columns.slice(action.columnIndex + 1)];
      return Object.assign({}, state, { machines: machines });
    case ADD_SLOT:
      //add slot at machines[machineIndex][rowIndex][columnIndex]
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots.push(0);
      return Object.assign({}, state, { machines: machines });
    case REMOVE_SLOT:
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots = [...machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots.slice(0, action.slotIndex), ...machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots.slice(action.slotIndex + 1)];
      return Object.assign({}, state, { machines: machines });
    case ADD_PRODUCT:
      //add product at machines[machineIndex][rowIndex][columnIndex][slotIndex]
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots[action.slotIndex] = action.productId;
      return Object.assign({}, state, { machines: machines });
    case REMOVE_PRODUCT:
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots[action.slotIndex] = 0;
      return Object.assign({}, state, { machines: machines });
  }

  return state;
}

export default machinesReducer;