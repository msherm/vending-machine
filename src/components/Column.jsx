import React, { PropTypes } from 'react';
import Slot from './Slot.jsx';

const Column = (props) => {
	const slots = this.props.slots.map((slotData, i) => {
		return <Slot key={ i }
                 columnIndex={ i }
                 slotData={ slotData }
                 addProduct={ props.addProduct }/>
	});

  return (
    <li className="column">
    	<button className="add-column-button" onClick={ addColumn }>Add Slot</button>
    	<ul className="slots">
    		{ slots }
    	</ul>
    </li>
  );
}

export default Column;