/**
 * 评论列表
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import Row from './replie_row';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Replies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: true,
    }
  }

  render() {
    if (this.state.refreshing) {
      return this._loadingView();
    }
    if (this.state.data.length === 0) {
      return this._emptyView();
    }
    return (
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            <Icon name="md-chatboxes" />
            <Text> {this.state.data.length}条回复</Text>
          </Text>
        </View>
        {this.state.data.map((_data, i) => (
          <Row data={_data} key={i} />
        ))}
      </View>
    )
  }

  componentDidMount() {
    setTimeout(() => this._onRefresh(), 100);
  }

  _onRefresh() {
    this.setState({
      refreshing: true,
    });
    const id = this.props.data.id;
    fetch(`https://www.v2ex.com/api/replies/show.json?topic_id=${id}`)
      .then((ret) => ret.json())
      .then((data) => {
        this.setState({
          data,
          refreshing: false
        })
      })
  }

  /**
   * 加载中界面
   */
  _loadingView() {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator 
          size='small'
        />
      </View>
    )
  }

  /**
   * 无评论界面
   */
  _emptyView() {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.noRepliesText}>暂无回复</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: '#DDD',
    borderRadius: 5,
    backgroundColor: '#FFF',
    // backgroundColor: 'rgba(238,238,238,0.4)',
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEE',
    backgroundColor: 'rgba(238,238,238,0.8)',
  },
  noRepliesText: {
    fontSize: 14,
    color: '#999'
  },
  info: {
    fontSize: 10,
    color: '#999'
  }
})