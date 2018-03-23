export const GET_PIZZAS = 'GET_PIZZAS';

export const getAllPizzas = url => ({
  type: GET_PIZZAS,
  payload: { url },
});
