import { StackNavigator } from 'react-navigation';

import { BASKET } from '../../config/routes';
import Basket from '../Basket';

export default StackNavigator({
  [BASKET]: { screen: Basket },
});
