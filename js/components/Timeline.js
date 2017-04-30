// @flow

import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import WebView from './WebViewAutoHeight';
import YofukashiListView from './YofukashiListView';
import Actions from '../actions';
import type { Status } from '../types/Status';

const BGWASH = 'rgba(255,255,255,0.8)';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  }
});

function renderRow(params: any) {
  return (
    <View style={styles.row} width={Dimensions.get('window').width}>
      <Image style={{ height: 40, width: 40 }} source={{ uri: params.account.avatar }} />
      <View style={{ flex: 1 }}>
        <Text>{params.account.display_name}</Text>
        <WebView
          style={{ backgroundColor: BGWASH }}
          source={{ html: params.content }}
        />
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
