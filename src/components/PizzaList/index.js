import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

import { PIZZA } from '../../config/routes';
import Price from '../Price';
import { black } from '../../lib/colors';

const styles = StyleSheet.create({
  price: {
    color: black,
  },
});

export default class PizzaList extends Component {
  componentDidMount() {
    this.props.loadPizzas('http://www.pizza.it');
  }

  renderPizzaItem = ({ item, index }) => {
    const { id, title, description, price, currency } = item;

    return (
      <ListItem
        key={index}
        title={title}
        subtitle={description}
        hideChevron
        rightTitle={Price({ price, currency })}
        rightTitleStyle={styles.price}
        onPress={() => this.props.navigation.navigate(PIZZA, { id, title })}
      />
    );
  };

  render() {
    return (
      <FlatList data={this.props.pizzas} renderItem={this.renderPizzaItem} />
    );
  }
}
