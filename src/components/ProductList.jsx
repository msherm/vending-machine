import React, { PropTypes } from 'react';

const ProductList = (props) => {
	const addProductToSlot = (event) => {
		props.addProductToSlot(props.machineIndex, event.target.value);
	}

	const products = props.products.map((product, i) => {
		return (
				<li key={ i }>
					<h6>{ product.name }</h6>
					<span>{ product.price }</span>
					{ props.targetSlot ? <button className="add-product-button" value={ i } onClick={ addProductToSlot }>Add</button> : null }
				</li>
		);
	});

  return (
    <ul className="product-listing">
    	{ products }
    </ul>
  );
}

export default ProductList;