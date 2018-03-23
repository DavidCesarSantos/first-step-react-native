import { StackNavigator } from 'react-navigation';

import { HOME, PIZZA } from '../config/routes';
import Home from './Home';
import PizzaScreenContainer from './PizzaScreenContainer';

export default StackNavigator({
  [HOME]: { screen: Home },
  [PIZZA]: { screen: PizzaScreenContainer },
});
