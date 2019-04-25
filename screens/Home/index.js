import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'galio-framework';

import styles from './styles';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'View 1',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text h1>
          MyCo
        </Text>

        <Text h2>
          MyCo
        </Text>

        <Text h3>
          MyCo
        </Text>

        <Text h4>
          MyCo
        </Text>

        <Text h5>
          MyCo
        </Text>

        <Text p>
          MyCo
        </Text>

        <Text p muted>
          MyCo
        </Text>
      </View>
    );
  }
}
