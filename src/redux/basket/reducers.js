import { ADD_TO_BASKET } from './actions';

const initialState = {
  basket: [],
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        basket: [...state.basket, action.payload.id],
      };

    default:
      return initialState;
  }
};
