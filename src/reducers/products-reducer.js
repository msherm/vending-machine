import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actions/action-types';

const initialState = {
  products: [
  	{
  		name: "Snickers",
  		price: 1.5
  	},
  	{
  		name: "Twix",
  		price: 1.2
  	},
  	{
  		name: "Chex Mix",
  		price: 2.22
  	},
  	{
  		name: "Cheetos",
  		price: 1.75
  	},
  	{
  		name: "Lifesavers",
  		price: 1.15
  	},
  	{
  		name: "Orbit: Sweet Mint",
  		price: 2.5
  	}
  ]
};

const productsReducer = function(state = initialState, action) {
	return state;
}

export default productsReducer;