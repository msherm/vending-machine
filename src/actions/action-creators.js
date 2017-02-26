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

export const removeProduct = (machineIndex, rowIndex, columnIndex, slotIndex) => {
  return {
    type: types.REMOVE_PRODUCT,
    machineIndex,
    rowIndex,
    columnIndex,
    slotIndex
  };
}