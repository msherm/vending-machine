import React, { PropTypes } from 'react';
import Product from './Product.jsx';

const Slot = (props) => {
  //if productId is present show the product, otherwise provide "Add Product" button
  const slotProduct = props.slotData.productId ? <Product productid={ props.slotData.productId }/> : <button className="add-product-button" onClick={ addSlot }>Add Product</button>;

  return (
    <li className="slot">
    	{ slotProduct }
    </li>
  );
}

export default Slot;