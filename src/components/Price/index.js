import React from 'react';
import { Text } from 'react-native';

import centsToEuro from '../../lib/cents-to-euro';
import formatPrice from '../../lib/format-price';

export default props => {
  const price = formatPrice(centsToEuro(props.price));

  return (
    <Text>
      {price}
      {props.currency}
    </Text>
  );
};
