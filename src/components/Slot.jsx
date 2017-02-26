import React, { PropTypes } from 'react';
import Product from './Product.jsx';

const Slot = (props) => {
	const removeSlot = () => {
    props.removeSlot(props.machineIndex, props.rowIndex, props.columnIndex, props.slotIndex);
  }

	const addProductToSlot = () => {
    props.addProductToSlot(props.machineIndex, props.rowIndex, props.columnIndex, props.slotIndex, 1);//TODO: update productID parameter to dynamic entry
  }

  //if productId is present show the product, otherwise provide "Add Product" button
  const slotProduct = props.productId ? <Product machineIndex={ props.machineIndex } rowIndex={ props.rowIndex } columnIndex={ props.columnIndex } slotIndex={ props.slotIndex } productId={ props.productId } removeProductFromSlot={ props.removeProductFromSlot }/> : <button className="add-product-button" onClick={ addProductToSlot }>Add Product</button>;

  return (
    <li className="slot">
    	<h5>Slot { props.slotIndex + 1 }</h5>
      <button className="remove-slot-button" onClick={ removeSlot }>Remove Slot</button>
    	{ slotProduct }
    </li>
  );
}

export default Slot;