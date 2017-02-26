import React, { PropTypes } from 'react';
import Slot from './Slot.jsx';

const Column = (props) => {
  const removeColumn = () => {
    props.removeColumn(props.machineIndex, props.rowIndex, props.columnIndex);
  }

  const addSlot = () => {
    props.addSlot(props.machineIndex, props.rowIndex, props.columnIndex);
  }

	const slots = props.slots.map((productId, i) => {
		return <Slot key={ i }
                 slotIndex={ i }
                 machineIndex={ props.machineIndex }
                 rowIndex={ props.rowIndex }
                 columnIndex={ props.columnIndex }
                 productId={ productId }
                 removeSlot={ props.removeSlot }
                 addProduct={ props.addProduct }
                 removeProduct={ props.removeProduct }/>
	});

  return (
    <li className="column">
      <h4>Column { props.columnIndex + 1 }</h4>
      <button className="remove-column-button" onClick={ removeColumn }>Remove Column</button>
    	<button className="add-slot-button" onClick={ addSlot }>Add Slot</button>
    	<ul className="slots">
    		{ slots }
    	</ul>
    </li>
  );
}

export default Column;