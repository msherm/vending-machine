import { ADD_VENDING_MACHINE, REMOVE_VENDING_MACHINE, ADD_ROW, REMOVE_ROW, ADD_COLUMN, REMOVE_COLUMN, ADD_SLOT, REMOVE_SLOT, SHOW_PRODUCT_SELECTION_PANEL, HIDE_PRODUCT_SELECTION_PANEL, SELECT_TARGET_SLOT, ADD_PRODUCT_TO_SLOT, REMOVE_PRODUCT_FROM_SLOT } from '../actions/action-types';

const initialState = {
  machines: []
};

const machinesReducer = function(state = initialState, action) {
  const machines = state.machines.slice();
  switch(action.type) {
    case ADD_VENDING_MACHINE:
      machines.push({ name: 'Vending Machine', mode: 'stock', selectionPanelVisible: false, rows: [], purchasedProducts: [], targetSlot: null });
      return Object.assign({}, state, { machines: machines });
    case REMOVE_VENDING_MACHINE:
      return Object.assign({}, state, { machines: [...machines.slice(0, action.machineIndex), ...machines.slice(action.machineIndex + 1)] });
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
      machines[action.machineIndex].targetSlot = null;
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots = [...machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots.slice(0, action.slotIndex), ...machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots.slice(action.slotIndex + 1)];
      return Object.assign({}, state, { machines: machines });
    case SHOW_PRODUCT_SELECTION_PANEL:
      machines[action.machineIndex].selectionPanelVisible = true;
      return Object.assign({}, state, { machines: machines });
    case HIDE_PRODUCT_SELECTION_PANEL:
      machines[action.machineIndex].selectionPanelVisible = false;
      return Object.assign({}, state, { machines: machines });
    case SELECT_TARGET_SLOT:
      machines[action.machineIndex].selectionPanelVisible = true;
      machines[action.machineIndex].targetSlot = [action.machineIndex, action.rowIndex, action.columnIndex, action.slotIndex];
      return Object.assign({}, state, { machines: machines });
    case ADD_PRODUCT_TO_SLOT:
      //add product at machines[machineIndex][targetSlot - rowIndex][targetSlot - columnIndex][targetSlot - slotIndex]
      machines[action.machineIndex].rows[machines[action.machineIndex].targetSlot[1]].columns[machines[action.machineIndex].targetSlot[2]].slots[machines[action.machineIndex].targetSlot[3]] = action.productId;
      return Object.assign({}, state, { machines: machines });
    case REMOVE_PRODUCT_FROM_SLOT:
      machines[action.machineIndex].rows[action.rowIndex].columns[action.columnIndex].slots[action.slotIndex] = 0;
      return Object.assign({}, state, { machines: machines });
  }

  return state;
}

export default machinesReducer;