import { createStore /*, combineReducers*/ } from 'redux';

import pizzas from '../redux/pizzas/reducers';
/*import basket from '../redux/basket/reducers';*/

/*const entities = combineReducers({
  pizzas,
  basket,
});*/

export default createStore(pizzas);
