import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { addVendingMachine, addRow, addColumn, addSlot, addProduct } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App machines={ this.props.machines }
           addVendingMachine={ this.props.handleAddVendingMachine }
           addRow={ this.props.handleAddRow }
           addColumn={ this.props.handleAddColumn }
           addSlot={ this.props.handleAddSlot }
           addProduct={ this.props.handleAddProduct }/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    machines: store.machinesState.machines
  };
}

const mapDispatchToProps = function(dispatch) {
  /*
    data[0] - machineIndex,
    data[1] - rowIndex,
    data[2] - columnIndex,
    data[3] - slotIndex,
    data[4] - productId
  */
  return {
    handleAddVendingMachine: () => {
      dispatch(addVendingMachine());
    },
    handleAddRow: (machineIndex) => {
      dispatch(addRow(machineIndex));
    },
    handleAddColumn: (machineIndex, rowIndex) => {
      dispatch(addColumn(machineIndex, rowIndex));
    },
    handleAddSlot: (machineIndex, rowIndex, columnIndex) => {
      dispatch(addSlot(machineIndex, rowIndex, columnIndex));
    },
    handleAddProduct: (machineIndex, rowIndex, columnIndex, slotIndex, productId) => {
      dispatch(addProduct(machineIndex, rowIndex, columnIndex, slotIndex, productId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);