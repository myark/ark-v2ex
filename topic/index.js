import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';

import Header from './header';
import Replies from './replies';

export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        scrollEventThrottle={200}
        onScroll={this._onScroll.bind(this)}
        style={styles.container}>
        <Header {...this.props} />
        <Replies {...this.props} />
      </ScrollView >
    )
  }
  
  _onScroll(evt) {
    const y = evt['nativeEvent']['contentOffset'].y;
    // 如果y < 10，则显示状态栏，否则隐藏
    StatusBar.setHidden(y > 50, true);
  }

  componentWillUnmount() {
    // 退出后显示状态栏（避免有时候未滚动直接退出
    StatusBar.setHidden(false, true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  }
})