import React, { PropTypes } from 'react';
import Column from './Column.jsx';

const Row = (props) => {
  const addColumn = () => {
    props.addColumn(props.machineIndex, props.rowIndex);
  }

	const columns = props.columns.map((columnData, i) => {
		return <Column key={ i }
                   columnIndex={ i }
                   machineIndex={ props.machineIndex }
                   rowIndex={ props.rowIndex }
                   slots={ columnData.slots }
                   addSlot={ props.addSlot }
                   addProduct={ props.addProduct }/>
	});

  return (
    <li className="row">
    	<button className="add-column-button" onClick={ addColumn }>Add Column</button>
    	<ul className="columns">
    		{ columns }
    	</ul>
    </li>
  );
}

export default Row;