import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { addVendingMachine, addRow, removeRow, addColumn, removeColumn, addSlot, removeSlot, addProduct, removeProduct } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App machines={ this.props.machines }
           addVendingMachine={ this.props.handleAddVendingMachine }
           addRow={ this.props.handleAddRow }
           removeRow={ this.props.handleRemoveRow }
           addColumn={ this.props.handleAddColumn }
           removeColumn={ this.props.handleRemoveColumn }
           addSlot={ this.props.handleAddSlot }
           removeSlot={ this.props.handleRemoveSlot }
           addProduct={ this.props.handleAddProduct }
           removeProduct={ this.props.handleRemoveProduct }/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    machines: store.machinesState.machines
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleAddVendingMachine: () => {
      dispatch(addVendingMachine());
    },
    handleAddRow: (machineIndex) => {
      dispatch(addRow(machineIndex));
    },
    handleRemoveRow: (machineIndex, rowIndex) => {
      dispatch(removeRow(machineIndex, rowIndex));
    },
    handleAddColumn: (machineIndex, rowIndex) => {
      dispatch(addColumn(machineIndex, rowIndex));
    },
    handleRemoveColumn: (machineIndex, rowIndex, columnIndex) => {
      dispatch(removeColumn(machineIndex, rowIndex, columnIndex));
    },
    handleAddSlot: (machineIndex, rowIndex, columnIndex) => {
      dispatch(addSlot(machineIndex, rowIndex, columnIndex));
    },
    handleRemoveSlot: (machineIndex, rowIndex, columnIndex, slotIndex) => {
      dispatch(removeSlot(machineIndex, rowIndex, columnIndex, slotIndex));
    },
    handleAddProduct: (machineIndex, rowIndex, columnIndex, slotIndex, productId) => {
      dispatch(addProduct(machineIndex, rowIndex, columnIndex, slotIndex, productId));
    },
    handleRemoveProduct: (machineIndex, rowIndex, columnIndex, slotIndex) => {
      dispatch(removeProduct(machineIndex, rowIndex, columnIndex, slotIndex));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);