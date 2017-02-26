import React, { PropTypes } from 'react';
import Column from './Column.jsx';

const Row = (props) => {
  const removeRow = () => {
    props.removeRow(props.machineIndex, props.rowIndex);
  }

  const addColumn = () => {
    props.addColumn(props.machineIndex, props.rowIndex);
  }

	const columns = props.columns.map((columnData, i) => {
		return <Column key={ i }
                   columnIndex={ i }
                   machineIndex={ props.machineIndex }
                   rowIndex={ props.rowIndex }
                   slots={ columnData.slots }
                   targetSlot={ props.targetSlot }
                   removeColumn={ props.removeColumn }
                   addSlot={ props.addSlot }
                   removeSlot={ props.removeSlot }
                   selectTargetSlot={ props.selectTargetSlot }
                   addProductToSlot={ props.addProductToSlot }
                   removeProductFromSlot={ props.removeProductFromSlot }/>
	});

  return (
    <li className="row">
      <h3>Row { props.rowIndex + 1 }</h3>
      <button className="remove-row-button" onClick={ removeRow }>Remove Row</button>
    	<button className="add-column-button" onClick={ addColumn }>Add Column</button>
    	<ul className="columns">
    		{ columns }
    	</ul>
    </li>
  );
}

export default Row;