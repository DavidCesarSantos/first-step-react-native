import React from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

import Price from '../Price';
import AddToCartButton from '../AddToCartButton';

export default props => {
  if (!props.image && !props.price) return null;

  return (
    <Card image={{ uri: props.image.url }}>
      <Text>{props.description}</Text>
      <Price price={props.price} currency={props.currency} />
      <AddToCartButton onPress={() => this.props.addToBasket(props.id)} />
    </Card>
  );
};
