import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { addVendingMachine, addRow, addColumn, addSlot } from '../actions/action-creators.js';

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
    handleAddColumn: (data) => {
      dispatch(addColumn(data[0], data[1]));
    },
    handleAddSlot: (data) => {
      dispatch(addSlot(data[0], data[1], data[2]));
    },
    handleAddProduct: (data) => {
      dispatch(addSlot(data[0], data[1], data[2], data[3], data[4]));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);