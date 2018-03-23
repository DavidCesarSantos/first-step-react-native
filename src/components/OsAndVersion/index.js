import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Platform } from 'react-native';

import { grey } from '../../lib/colors';

const styles = StyleSheet.create({
  os: {
    fontSize: 80,
    fontWeight: 'bold',
    color: grey,
    textAlign: 'center',
  },
  version: {
    fontSize: 40,
  },
});

export default () => {
  const { OS, Version } = Platform;

  return (
    <Text style={styles.os}>
      <Text>{OS.toUpperCase()}</Text>
      {'\n'}
      <Text style={styles.version}>{`v${Version}`}</Text>
    </Text>
  );
};
