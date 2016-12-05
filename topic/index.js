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
        showsVerticalScrollIndicator={false}
        style={styles.container}>
        <Header {...this.props} />
        <Replies {...this.props} />
      </ScrollView >
    )
  }
  
  _onScroll(evt) {
    const event = evt['nativeEvent'];
    // 如果y < 50，则显示状态栏，否则隐藏
    StatusBar.setHidden(event['contentOffset']['y'] > 50, true);
    
    // 如果超过底部，则加载更多
    const _num = event['contentSize']['height'] - event['layoutMeasurement']['height'] - event['contentOffset']['y'];
    
    if (event['contentSize']['height'] > event['layoutMeasurement']['height'] && _num < -50) {
      console.log('上拉，加载更多评论');
    }
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