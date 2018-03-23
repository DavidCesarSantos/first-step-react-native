import React, { Component } from 'react';

import Screen from '../Screen';
import PizzaListContainer from '../PizzaListContainer';
import navigable from '../../hoc/navigable';

class Home extends Component {
  render() {
    return (
      <Screen>
        <PizzaListContainer navigation={this.props.navigation} />
      </Screen>
    );
  }
}

export default navigable(Home, 'Pizza land');
