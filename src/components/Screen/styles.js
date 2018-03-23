import { View } from 'react-native';
import glamorous from 'glamorous-native';

import { greyLight } from '../../lib/colors';

export const Wrapper = glamorous(View)(
  {
    backgroundColor: greyLight,
    height: '100%',
  },
  props => ({
    justifyContent: props.isVerticalCentered ? 'center' : null,
  })
);
