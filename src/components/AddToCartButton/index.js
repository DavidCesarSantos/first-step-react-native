import React from 'react';
import { Button } from 'react-native-elements';

import { orange } from '../../lib/colors';

export default () => (
  <Button
    raised
    icon={{ name: 'add-circle-outline' }}
    title="Ajouter"
    large
    backgroundColor={orange}
  />
);
