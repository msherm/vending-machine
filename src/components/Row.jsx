import React, { PropTypes } from 'react';
import Column from './Column.jsx';

const Row = (props) => {
	const columns = this.props.columns.map((columnData, i) => {
		return <Column key={ i }
                   columnIndex={ i }
                   columnData={ columnData }
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