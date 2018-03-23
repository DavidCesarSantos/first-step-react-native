export const ADD_TO_BASKET = 'ADD_TO_BASKET';

export const addToBasket = id => ({
  type: ADD_TO_BASKET,
  payload: { id },
});
