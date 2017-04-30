// @flow

import { View, Text, Dimensions, Image } from 'react-native';
import WebView from './WebViewAutoHeight';
import YofukashiListView from './YofukashiListView';
import Actions from '../actions';
import type { Status } from '../types/Status';

const BGWASH = 'rgba(255,255,255,0.8)';

function renderRow(params: any) {
  return (
    <View width={Dimensions.get('window').width}>
      <Text>{params.account.display_name}</Text>
      <Image style={{ height: 40, width: 40 }} source={{ uri: params.account.avatar }} />
      <WebView
        style={{ backgroundColor: BGWASH }}
        source={{ html: `<body>${params.content}</body>` }}
      />
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
