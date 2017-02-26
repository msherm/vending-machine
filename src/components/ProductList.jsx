import React, { PropTypes } from 'react';

const ProductList = (props) => {
	const products = props.products.map((product, i) => {
		return (
				<li>
					<h6>{ product.name }</h6>
					<span>{ product.price }</span>
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