import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import App from '../components/App.jsx';
import store from '../store';

import { addVendingMachine } from '../actions/action-creators.js';

class AppContainer extends React.Component {
  render() {
    return (
      <App/>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    machines: store.machines
  };
}

const mapDispatchToProps = function(dispatch) {
  return {
    handleAddVendingMachine: () => {
      dispatch(addVendingMachine());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);