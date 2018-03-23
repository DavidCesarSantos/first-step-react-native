import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { HOME, BASKET, SETTINGS } from '../../config/routes';
import { grey, orange, white } from '../../lib/colors';
import BasketNavigator from '../BasketNavigator';
import HomeNavigator from '../HomeNavigator';
import SettingsNavigator from '../SettingsNavigator';

const routes = {
  [HOME]: { screen: HomeNavigator },
  [BASKET]: { screen: BasketNavigator },
  [SETTINGS]: { screen: SettingsNavigator },
};

const options = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state;

      let iconName;
      switch (routeName) {
        case HOME:
          iconName = 'home';
          break;

        case BASKET:
          iconName = 'shopping-cart';
          break;

        case SETTINGS:
          iconName = 'settings';
          break;
      }

      return <Icon name={iconName} type="material-icons" color={tintColor} />;
    },
    title: navigation.state,
  }),
  lazy: false,
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: orange,
    inactiveTintColor: grey,
    labelStyle: {
      fontSize: 14,
    },
    style: {
      borderTopColor: white,
    },
  },
};

export default TabNavigator(routes, options);
