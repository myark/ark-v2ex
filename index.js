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

  componentDidMount() {
    const { setBottomBarStyle } = this.props;
    setBottomBarStyle && setBottomBarStyle({
      backgroundColor: 'rgba(238,238,238,0.8)',
      color: '#333',
      borderColor: '#DDD',
    });
  }
}