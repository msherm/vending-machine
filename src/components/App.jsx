import React, { PropTypes } from 'react';
import ProductList from './ProductList.jsx';
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
                      name={ machineData.name }
                      mode={ machineData.mode }
  										rows={ machineData.rows }
                      purchasedProducts={ machineData.purchasedProducts }
                      removeVendingMachine={ this.props.removeVendingMachine }
  										addRow={ this.props.addRow }
                      removeRow={ this.props.removeRow }
  										addColumn={ this.props.addColumn }
                      removeColumn={ this.props.removeColumn }
  										addSlot={ this.props.addSlot }
                      removeSlot={ this.props.removeSlot }
  										addProductToSlot={ this.props.addProductToSlot }
                      removeProductFromSlot={ this.props.removeProductFromSlot }/>
  	});

    return (
      <div className="container">
        <ProductList products={ this.props.products }/>
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