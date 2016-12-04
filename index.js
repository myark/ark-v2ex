import React, { Component } from 'react';
import {
  View,
  Text,
  NavigatorIOS,
} from 'react-native';

import Home from './home';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Home,
          title: 'v2ex',
          passProps: this.props
        }}
        style={{flex: 1}}
      />
    )
  }
}