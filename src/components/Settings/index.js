import React, { Component } from 'react';

import navigable from '../../hoc/navigable';
import OsAndVersion from '../OsAndVersion';
import Screen from '../Screen';

class Settings extends Component {
  render() {
    return (
      <Screen isVerticalCentered>
        <OsAndVersion />
      </Screen>
    );
  }
}

export default navigable(Settings, 'Settings');
