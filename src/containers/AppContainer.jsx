import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { addVendingMachine, removeVendingMachine, addRow, removeRow, addColumn, removeColumn, addSlot, removeSlot, showProductSelectionPanel, hideProductSelectionPanel, selectTargetSlot, addProductToSlot, removeProductFromSlot } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App products={ this.props.products }
           machines={ this.props.machines }
           addVendingMachine={ this.props.handleAddVendingMachine }
           removeVendingMachine={ this.props.handleRemoveVendingMachine }
           addRow={ this.props.handleAddRow }
           removeRow={ this.props.handleRemoveRow }
           addColumn={ this.props.handleAddColumn }
           removeColumn={ this.props.handleRemoveColumn }
           addSlot={ this.props.handleAddSlot }
           removeSlot={ this.props.handleRemoveSlot }
           showProductSelectionPanel={ this.props.handleShowProductSelectionPanel }
           hideProductSelectionPanel={ this.props.handleHideideProductSelectionPanel }
           selectTargetSlot={ this.props.handleSelectTargetSlot }
           addProductToSlot={ this.props.handleAddProductToSlot }
           removeProductFromSlot={ this.props.handleRemoveProductFromSlot }/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    products: store.productsState.products,
    machines: store.machinesState.machines
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleAddVendingMachine: () => {
      dispatch(addVendingMachine());
    },
    handleRemoveVendingMachine: (machineIndex) => {
      dispatch(removeVendingMachine(machineIndex));
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
    handleShowProductSelectionPanel: (machineIndex) => {
      dispatch(showProductSelectionPanel(machineIndex));
    },
    handleHideProductSelectionPanel: (machineIndex) => {
      dispatch(hideProductSelectionPanel(machineIndex));
    },
    handleSelectTargetSlot: (machineIndex, rowIndex, columnIndex, slotIndex) => {
      dispatch(selectTargetSlot(machineIndex, rowIndex, columnIndex, slotIndex));
    },
    handleAddProductToSlot: (machineIndex, productId) => {
      dispatch(addProductToSlot(machineIndex, productId));
    },
    handleRemoveProductFromSlot: (machineIndex, rowIndex, columnIndex, slotIndex) => {
      dispatch(removeProductFromSlot(machineIndex, rowIndex, columnIndex, slotIndex));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);