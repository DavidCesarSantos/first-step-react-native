import { StackNavigator } from 'react-navigation';

import { SETTINGS } from '../../config/routes';
import Settings from '../Settings';

export default StackNavigator({
  [SETTINGS]: { screen: Settings },
});
