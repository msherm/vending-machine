import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/action-types';

const initialState = {
  products: [
  	{
  		name: "Snickers",
  		price: 1.5,
  		stock: 7
  	},
  	{
  		name: "Twix",
  		price: 1.2,
  		stock: 6
  	},
  	{
  		name: "Chex Mix",
  		price: 2.22,
  		stock: 5
  	},
  	{
  		name: "Cheetos",
  		price: 1.75,
  		stock: 4
  	},
  	{
  		name: "Lifesavers",
  		price: 1.15,
  		stock: 3
  	},
  	{
  		name: "Orbit: Sweet Mint",
  		price: 2.5,
  		stock: 2
  	}
  ]
};

const productsReducer = function(state = initialState, action) {
	return state;
}

export default productsReducer;