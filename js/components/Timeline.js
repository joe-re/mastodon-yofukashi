// @flow

import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import WebView from './WebViewAutoHeight';
import YofukashiListView from './YofukashiListView';
import Actions from '../actions';
import type { Status } from '../types/Status';

const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 8
  },
  boost: {
    marginLeft: 44,
    flexDirection: 'row',
    marginBottom: 4
  },
  boostText: {
    color: 'grey',
    fontSize: 12
  },
  row: {
    flex: 1,
    flexDirection: 'row',
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
  const status = params.reblog ? params.reblog : params;
  return (
    <View style={styles.rowContainer} width={Dimensions.get('window').width}>
      { params.reblog &&
        <View style={styles.boost}>
          <Icon style={styles.boostText} name="retweet" size={12} />
          <Text style={styles.boostText}>{params.account.display_name} boosted</Text>
        </View>
      }
      <View style={styles.row}>
        <Image style={styles.avator} source={{ uri: status.account.avatar }} />
        <View style={styles.rowContent}>
          <View style={styles.rowHeader}>
            <Text style={styles.displayName}>{status.account.display_name}</Text>
            <Text style={styles.acct}>{status.account.acct}</Text>
            <Text style={styles.elapsed}>{status.elapsed ? status.elapsed : ''}</Text>
          </View>
          <WebView
            style={{ padding: 0 }}
            source={{ html: status.content }}
          />
          <View style={styles.actions}>
            <Icon style={styles.action} name="reply" size={22} />
            <Icon style={styles.action} name="retweet" size={22} />
            <Icon style={styles.action} name="star" size={22} />
          </View>
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
