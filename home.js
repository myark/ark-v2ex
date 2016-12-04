import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  RefreshControl,
} from 'react-native';

import {
  TitleBar
} from 'ark-ui';

import Row from './row';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      data: [],
      refreshing: false
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        <TitleBar
          title="V2EX"
          titleColor="#000"
          barStyle="dark-content"
          backgroundColor="#FFF"
        />
        <ListView
          style={styles.container}
          initialListSize={20}
          enableEmptySections={true}
          dataSource={this.ds.cloneWithRows(this.state.data)}
          renderRow={(data) => (
            <Row data={data} navigator={this.props.navigator} />
          )}
          refreshControl={(
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          )}
        />
      </View>
    )
  }

  componentDidMount() {
    setTimeout(() => this._onRefresh(), 100);
  }

  _onRefresh() {
    this.setState({
      refreshing: true
    });
    fetch('https://www.v2ex.com/api/topics/latest.json')
      .then((ret) => ret.json())
      .then((data) => {
        this.setState({
          data,
          refreshing: false
        })
      })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEE',
  }
})