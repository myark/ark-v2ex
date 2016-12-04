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

export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView  style={styles.container}>
        <Header {...this.props} />
        <View style={{flex:1}}>
          <Text>body</Text>
        </View>
      </ScrollView >
    )
  }

  componentDidMount() {
    console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE'
  }
})