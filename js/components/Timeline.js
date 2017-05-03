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
    flexDirection: 'row',
    padding: 8
  },
  avator: {
    height: 40,
    width: 40,
    borderRadius: 3
  },
  rowHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 20
  },
  displayName: {
    marginRight: 4,
    fontSize: 16
  },
  acct: {
    fontSize: 12,
    color: 'grey'
  },
  elapsed: {
    marginLeft: 'auto',
    color: 'grey'
  },
  rowContent: {
    flex: 1,
    marginLeft: 4
  },
  actions: {
    flex: 1,
    flexDirection: 'row'
  },
  action: {
    marginRight: 24
  }
});

function renderRow(params: Status) {
  return (
    <View style={styles.row} width={Dimensions.get('window').width}>
      <Image style={styles.avator} source={{ uri: params.account.avatar }} />
      <View style={styles.rowContent}>
        <View style={styles.rowHeader}>
          <Text style={styles.displayName}>{params.account.display_name}</Text>
          <Text style={styles.acct}>{params.account.acct}</Text>
          <Text style={styles.elapsed}>{params.elapsed ? params.elapsed : ''}</Text>
        </View>
        <WebView
          style={{ padding: 0 }}
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
      renderRow={(v: Status) => renderRow(v)}
      rowHasChanged={(r1, r2) => r1 !== r2}
    />
  );
}
