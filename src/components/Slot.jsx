import React, { PropTypes } from 'react';
import Product from './Product.jsx';

const Slot = (props) => {
	const addProduct = () => {
    props.addProduct(props.machineIndex, props.rowIndex, props.columnIndex, props.slotIndex, 1);//TODO: update productID parameter to dynamic entry
  }

  //if productId is present show the product, otherwise provide "Add Product" button
  const slotProduct = props.productId ? <Product productId={ props.productId }/> : <button className="add-product-button" onClick={ addProduct }>Add Product</button>;

  return (
    <li className="slot">
    	{ slotProduct }
    </li>
  );
}

export default Slot;