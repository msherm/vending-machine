import React, { PropTypes } from 'react';
import Machine from './Machine.jsx';

class App extends React.Component {
  componentDidMount() {
  }

  render() {
  	const addVendingMachine = () => {
  		this.props.addVendingMachine();
  	}

  	const machines = this.props.machines.map((machineData, i) => {
  		return <Machine key={ i }
  										machineIndex={ i }
  										rows={ machineData.rows }
  										addRow={ this.props.addRow }
                      removeRow={ this.props.removeRow }
  										addColumn={ this.props.addColumn }
                      removeColumn={ this.props.removeColumn }
  										addSlot={ this.props.addSlot }
                      removeSlot={ this.props.removeSlot }
  										addProduct={ this.props.addProduct }
                      removeProduct={ this.props.removeProduct }/>
  	});

    return (
      <div className="container">
      	<h1>Vending Machines</h1>
      	<button className="add-machine-button" onClick={ addVendingMachine }>Add Machine</button>
      	<ul className="machines">
      		{ machines }
      	</ul>
      </div>
    );
  }
}

export default App;