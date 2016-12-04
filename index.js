import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  NavigatorIOS,
} from 'react-native';

import Home from './home';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Navigator
        initialRoute={{
          name: 'Home',
          component: Home,
          params: this.props
        }}
        configureScene={(route, routeStack) => {
          return Navigator.SceneConfigs.FloatFromBottom;
          // return {
          //   ...Navigator.SceneConfigs.FloatFromBottom,
          //   gestures: {
          //     pop: {
          //       ...Navigator.SceneConfigs.FloatFromBottom.gestures.pop,
          //       snapVelocity: 8,
          //       edgeHitWidth: 66, // 滑动区域高度
          //     }
          //   }
          // }
        }}
        renderScene={(route, navigator) => {
          let Cmp = route.component;
          return <Cmp {...route.params} navigator={navigator} />;
        }}
      />
    )
  }

  componentDidMount() {
    const { setBottomBarStyle } = this.props;
    setBottomBarStyle && setBottomBarStyle({
      backgroundColor: '#EEE',
      color: '#333',
      borderColor: '#DDD',
    });
  }
}