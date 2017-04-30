// @flow

import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WebView from './WebViewAutoHeight';
import YofukashiListView from './YofukashiListView';
import Actions from '../actions';
import type { Status } from '../types/Status';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  actions: {
    flex: 1,
    flexDirection: 'row'
  },
  action: {
    marginRight: 24
  }
});

function renderRow(params: any) {
  return (
    <View style={styles.row} width={Dimensions.get('window').width}>
      <Image style={{ height: 40, width: 40 }} source={{ uri: params.account.avatar }} />
      <View style={{ flex: 1 }}>
        <Text>{params.account.display_name}</Text>
        <WebView
          source={{ html: params.content }}
        />
        <View style={styles.actions}>
          <Icon style={styles.action} name="reply" size={22} />
          <Icon style={styles.action} name="retweet" size={22} />
          <Icon style={styles.action} name="star" size={22} />
        </View>
      </View>
    </View>
  );
}

export default function Timeline(props: { statuses: Status[], actions: typeof Actions }) {
  return (
    <YofukashiListView
      dataSource={props.statuses}
      renderRow={(v: any) => renderRow(v)}
      rowHasChanged={(r1, r2) => r1 !== r2}
    />
  );
}
