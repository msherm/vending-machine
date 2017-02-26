import React, { PropTypes } from 'react';
import Row from './Row.jsx';

const Machine = (props) => {
  const removeVendingMachine = () => {
    props.removeVendingMachine(props.machineIndex);
  }

	const addRow = () => {
		props.addRow(props.machineIndex);
	}

	const rows = props.rows.map((rowData, i) => {
		return <Row key={ i }
								rowIndex={ i }
								machineIndex={ props.machineIndex }
								columns={ rowData.columns }
								removeRow={ props.removeRow }
								addColumn={ props.addColumn }
								removeColumn={ props.removeColumn }
								addSlot={ props.addSlot }
								removeSlot={ props.removeSlot }
								addProduct={ props.addProduct }
								removeProduct={ props.removeProduct }/>
	});

  return (
    <li className="machine">
    	<h2>Machine { props.machineIndex + 1 }</h2>
      <button className="remove-machine-button" onClick={ removeVendingMachine }>Remove Machine</button>
    	<button className="add-row-button" onClick={ addRow }>Add Row</button>
    	<ul className="rows">
    		{ rows }
    	</ul>
    </li>
  );
}

export default Machine;