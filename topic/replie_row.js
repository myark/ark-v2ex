import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
export default class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, floor } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => null}
          style={styles.leftContainer}>
          <Image
            source={{
              uri: 'https:' + data['member']['avatar_normal']
            }}
            style={styles.avatar}
            resizeMode='cover'
          />
        </TouchableOpacity>

        <View style={styles.rightContainer}>
          <View style={styles.rightInfoContainer}>
            <Text style={styles.rightInfo}>
              <Text>@{data['member']['username']} </Text>
              <Text style={styles.rightInfoDate}>
                <Icon name="ios-stopwatch-outline" />
                <Text> {new Date(parseInt(data['created'] + '000')).toISOString().substr(5, 11).replace('-', '/').replace('T',' ')} </Text>
              </Text>
              {data['thanks'] > 0 ? (
                <Text style={styles.rightInfoThanks}>
                  <Icon name="ios-heart-outline" />
                  <Text> {data['thanks']}</Text>
                </Text>
              ) : null}
            </Text>

            <Text style={styles.rightFloor}>
              <Text>#{floor}</Text>
            </Text>
          </View>

          <View>
            <Text style={styles.content}>{data.content}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    backgroundColor: 'rgba(238,238,238,0.4)',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DDD',
  },
  leftContainer: {
    width: 30,
    minHeight: 30,
    alignItems: 'center',
    // backgroundColor: 'green'
  },
  rightContainer: {
    flex: 1,
    marginLeft: 5,
    flexDirection: 'column',
    // backgroundColor: 'red'
  },
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  rightInfoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  rightInfo: {
    flex: 1,
    fontSize: 12,
    color: '#666'
  },
  rightInfoDate: {
    fontSize: 10,
    color: '#999',
  },
  rightInfoThanks: {
    fontSize: 10,
    color: '#999'
  },
  rightFloor: {
    width: 50,
    textAlign: 'right',
    fontSize: 10,
    color: '#999'
  },
  content: {
    lineHeight: 20,
    fontSize: 14,
    color: '#333'
  }
})