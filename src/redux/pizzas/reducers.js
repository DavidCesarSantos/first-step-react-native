import { GET_PIZZAS } from './actions';
import pizzas from '../../data/pizzas';

const initialState = {
  pizzas: [],
};

export default (state, action) => {
  switch (action.type) {
    case GET_PIZZAS:
      return {
        pizzas: pizzas(40),
      };

    default:
      return initialState;
  }
};
