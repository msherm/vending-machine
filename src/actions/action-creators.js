import * as types from './action-types';

export const addVendingMachine = () => {
  return {
    type: types.ADD_VENDING_MACHINE
  };
}

export const addRow = (machineIndex) => {
  return {
    type: types.ADD_ROW,
    machineIndex
  };
}

export const addColumn = (machineIndex, rowIndex) => {
  return {
    type: types.ADD_COLUMN,
    machineIndex, 
    rowIndex
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

export const addProduct = (machineIndex, rowIndex, columnIndex, slotIndex, productId) => {
  return {
    type: types.ADD_PRODUCT,
    machineIndex,
    rowIndex,
    columnIndex,
    slotIndex,
    productId
  };
}