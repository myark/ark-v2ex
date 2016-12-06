import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
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

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data['title']}</Text>
        </View>

        {data['content'].length > 0  ? (
          <View style={styles.contentContainer}>
            <Text style={styles.content}>{data['content']}</Text>
          </View>
        ) : null}

        <View style={styles.infoContainer}>
          <Text style={styles.infoNode} numberOfLines={1}>
            <Icon name="ios-bookmark" />
            <Text> {data['node']['title']}</Text>
          </Text>
          
          <Text style={styles.infoUser} numberOfLines={1}>
            <Icon name="ios-contact" />
            <Text> {data['member']['username']}</Text>
          </Text>

          <Text style={styles.infoDate} numberOfLines={1}>
            <Icon name="ios-alarm" />
            <Text> {new Date(parseInt(data['created'] + '000')).toISOString().substr(5, 11).replace('-', '/').replace('T',' ')}</Text>
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // minHeight: 100,
    flexDirection: 'column',
    marginLeft: 6,
    marginRight: 6,
    marginTop: 50,
    marginBottom: 3,
    borderWidth: 0.5,
    borderColor: '#DDD',
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  avatarContainer: {
    // flex: 1,
    // height: 25,
    marginBottom: -25,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    top: -25,
    borderColor: '#DDD',
    backgroundColor: '#FFF'
  },

  titleContainer: {
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#EEE',
  },

  contentContainer: {
    padding: 5,
    backgroundColor: 'rgba(238, 238, 238, 0.4)'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 0.5,
    borderTopColor: '#EEE',
    backgroundColor: 'rgba(238,238,238,0.8)',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333'
  },
  content: {
    lineHeight: 20,
    fontSize: 14,
    color: '#333'
  },
  infoNode: {
    flex: 1,
    fontSize: 12,
    color: '#999',
    textAlign: 'left',
  },
  infoUser: {
    flex: 1,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  infoDate: {
    flex: 1,
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
})