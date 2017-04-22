// @flow

import { Component } from 'react';
import { View, Text, WebView, Dimensions, Image } from 'react-native';
import YofukashiListView from './YofukashiListView';

const BGWASH = 'rgba(255,255,255,0.8)';

function renderRow(params: any) {
  return (
    <View style={{ height: 120 }}>
      <Text>{params.account.display_name}</Text>
      <Image style={{ height: 40, width: 40 }} source={{ uri: params.account.avatar }} />
      <WebView
        style={{
          backgroundColor: BGWASH,
          width: Dimensions.get('window').width
        }}
        source={{ html: params.content }}
      />
    </View>
  );
}

export default class Timeline extends Component {
  state: any;

  constructor(props: any) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  render() {
    return (
      <YofukashiListView
        dataSource={this.state.tweets}
        renderRow={(v: any) => renderRow(v)}
        rowHasChanged={(r1, r2) => r1 !== r2}
      />
    );
  }
}
