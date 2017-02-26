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
    const slotTargeted = (props.targetSlot && props.targetSlot[0] === props.machineIndex && props.targetSlot[1] === props.rowIndex && props.targetSlot[2] === props.columnIndex && props.targetSlot[3] === i) ? true : false;
		return <Slot key={ i }
                 slotIndex={ i }
                 machineIndex={ props.machineIndex }
                 rowIndex={ props.rowIndex }
                 columnIndex={ props.columnIndex }
                 productId={ productId }
                 slotTargeted={ slotTargeted }
                 removeSlot={ props.removeSlot }
                 selectTargetSlot={ props.selectTargetSlot }
                 addProductToSlot={ props.addProductToSlot }
                 removeProductFromSlot={ props.removeProductFromSlot }/>
	});

  return (
    <li className="column">
      <h4>Column { props.columnIndex + 1 }</h4>
      <button className="remove-column-button" onClick={ removeColumn }>Remove Column</button>
    	<button className="add-slot-button" onClick={ addSlot }>Add Slot</button>
    	<ul className="slots">
    		{ slots }
    	</ul>
      <button className="purchase-button">Purchase</button>
    </li>
  );
}

export default Column;