import * as types from './action-types';

//Product
export const addProductToSlotStock = (product) => {

}

//Machine
export const addVendingMachine = () => {
  return {
    type: types.ADD_VENDING_MACHINE
  };
}

export const removeVendingMachine = (machineIndex) => {
  return {
    type: types.REMOVE_VENDING_MACHINE,
    machineIndex
  };
}

export const addRow = (machineIndex) => {
  return {
    type: types.ADD_ROW,
    machineIndex
  };
}

export const removeRow = (machineIndex, rowIndex) => {
  return {
    type: types.REMOVE_ROW,
    machineIndex,
    rowIndex
  };
}

export const addColumn = (machineIndex, rowIndex) => {
  return {
    type: types.ADD_COLUMN,
    machineIndex, 
    rowIndex
  };
}

export const removeColumn = (machineIndex, rowIndex, columnIndex) => {
  return {
    type: types.REMOVE_COLUMN,
    machineIndex,
    rowIndex,
    columnIndex
  };
}

export const addSlot = (machineIndex, rowIndex, columnIndex) => {
  return {
    type: types.ADD_SLOT,
    machineIndex,
    rowIndex,
    columnIndex
  };
}

export const removeSlot = (machineIndex, rowIndex, columnIndex, slotIndex) => {
  return {
    type: types.REMOVE_SLOT,
    machineIndex,
    rowIndex,
    columnIndex,
    slotIndex
  };
}

export const addProductToSlot = (machineIndex, rowIndex, columnIndex, slotIndex, productId) => {
  return {
    type: types.ADD_PRODUCT_TO_SLOT,
    machineIndex,
    rowIndex,
    columnIndex,
    slotIndex,
    productId
  };
}

export const removeProductFromSlot = (machineIndex, rowIndex, columnIndex, slotIndex) => {
  return {
    type: types.REMOVE_PRODUCT_FROM_SLOT,
    machineIndex,
    rowIndex,
    columnIndex,
    slotIndex
  };
}