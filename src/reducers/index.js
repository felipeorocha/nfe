import { combineReducers } from 'redux'; // should move to src/index.js

const promoReducer = () => {
  return [
    { price: 0.09 },
    { price: 0.25 }
  ];
};

const selectedPromosReducer = (selectedPromos = null, action) => {
  if (action.type === 'PROMO_SELECTED') {
    return action.payload;
  }

  return selectedPromos;
}

export default combineReducers({
  promos: promoReducer,
  selectedPromo: selectedPromosReducer
});
