import React from 'react';
import { StyleSheet, Text } from 'react-native';

import { black } from '../../lib/colors';

const styles = StyleSheet.create({
  p: {
    fontFamily: 'Roboto',
    color: black,
  },
});

export default props => <Text style={styles.p}>{props.children}</Text>;
