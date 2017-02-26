import React, { PropTypes } from 'react';

const Product = (props) => {
	const removeProduct = () => {
    props.removeProduct(props.machineIndex, props.rowIndex, props.columnIndex, props.slotIndex);
  }

  return (
    <div>
    	{ props.productId }
      <button className="remove-product-button" onClick={ removeProduct }>Remove Product</button>
    </div>
  );
}

export default Product;