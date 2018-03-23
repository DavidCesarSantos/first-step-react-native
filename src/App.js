import React, { Component } from 'react';
import { createStore /*, combineReducers*/ } from 'redux';
import { Provider } from 'react-redux';

import RootNavigator from './components/RootNavigator';
import pizzas from './redux/pizzas/reducers';

/*const rootReducers = combineReducers({
  pizzas
});*/

/*const store = createStore(rootReducers);*/
const store = createStore(pizzas);

export default class App extends Component {
  render() {
    return <Provider store={store}><RootNavigator /></Provider>;
  }
}
