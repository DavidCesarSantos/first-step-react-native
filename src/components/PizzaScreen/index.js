import React, { Component } from 'react';
import { func } from 'prop-types';

import Screen from '../Screen';
import navigable from '../../hoc/navigable';
import PizzaCard from '../PizzaCard';
import { pizza } from '../PizzaCard/types';

class PizzaScreen extends Component {
  static propTypes = {
    pizza,
    addToBasket: func,
  };

  render() {
    return (
      <Screen>
        <PizzaCard {...this.props.pizza} addToBasket={this.props.addToBasket} />
      </Screen>
    );
  }
}

export default navigable(PizzaScreen);
