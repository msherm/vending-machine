import React, { PropTypes } from 'react';
import Slot from './Slot.jsx';

const Column = (props) => {
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
                 addProduct={ props.addProduct }/>
	});

  return (
    <li className="column">
    	<button className="add-slot-button" onClick={ addSlot }>Add Slot</button>
    	<ul className="slots">
    		{ slots }
    	</ul>
    </li>
  );
}

export default Column;