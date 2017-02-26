import React, { PropTypes } from 'react';

const Product = (props) => {
	const removeProductFromSlot = () => {
    props.removeProductFromSlot(props.machineIndex, props.rowIndex, props.columnIndex, props.slotIndex);
  }

  return (
    <div>
    	{ props.productId }
      <button className="remove-product-button" onClick={ removeProductFromSlot }>Remove Product</button>
    </div>
  );
}

export default Product;