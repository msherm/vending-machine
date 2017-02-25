import React, { PropTypes } from 'react';
import Row from './Row.jsx';

const Machine = (props) => {
	const addRow = () => {
		props.addRow(props.machineIndex);
	}

	const rows = props.rows.map((rowData, i) => {
		return <Row key={ i }
								rowIndex={ i }
								rowData={ rowData }
								addColumn={ props.addColumn }
								addSlot={ props.addSlot }
								addProduct={ props.addProduct }/>
	});

  return (
    <li className="machine">
    	<h2>Machine { props.machineIndex + 1 }</h2>
    	<button className="add-row-button" onClick={ addRow }>Add Row</button>
    	<ul className="rows">
    		{ rows }
    	</ul>
    </li>
  );
}

export default Machine;