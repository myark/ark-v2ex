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
    const { data } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={styles.container}>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'http:' + data['member']['avatar_large']
            }}
            style={styles.avatar}
            resizeMode='cover'
          />
        </TouchableOpacity>

        <View style={styles.centerContainer}>
          <View style={styles.titleContainer}>
            <Text
              style={styles.title}
              numberOfLines={2}
              >{data.title}
            </Text>
          </View>

          <View style={styles.contentContainer}>
            <Text
              style={styles.content}
              numberOfLines={4}
              >{data.content}
            </Text>
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.info} numberOfLines={1}>
            <Icon name="ios-bookmark" />
            <Text> {data['node']['title']}</Text>
          </Text>
          
          <Text style={styles.info} numberOfLines={1}>
            <Icon name="ios-contact" />
            <Text> {data['member']['username']}</Text>
          </Text>

          <Text style={styles.info} numberOfLines={1}>
            <Icon name="ios-alarm" />
            <Text> {new Date(parseInt(data['created'] + '000')).toISOString().substr(5, 11).replace('-', '/').replace('T',' ')}</Text>
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 28,
    marginBottom: 3,
    borderWidth: 0.5,
    borderColor: '#DDD',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -25,
  },
  centerContainer: {
    flex: 1,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    top: -25,
    borderColor: '#DDD'
  },

  titleContainer: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEE',
  },

  contentContainer: {
    padding: 5,
    backgroundColor: 'rgba(238, 238, 238, 0.1)'
  },

  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#EEE',
    backgroundColor: 'rgba(238,238,238,0.3)',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333'
  },
  content: {
    fontSize: 14,
    color: '#666'
  },
  info: {
    flex: 1,
    fontSize: 12,
    color: '#999',
    paddingRight: 2,
  }
})