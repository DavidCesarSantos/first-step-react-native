import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Screen from '../Screen';
import navigable from '../../hoc/navigable';

class Basket extends Component {
  static defaultProps = {
    basket: [1, 2, 3],
  };

  renderPizza(id) {
    return (
      <View>
        <Text>{id}</Text>
      </View>
    );
  }

  render() {
    return (
      <Screen>
        {this.props.basket.map(this.renderPizza)}
      </Screen>
    );
  }
}

export default navigable(Basket, 'Basket');
