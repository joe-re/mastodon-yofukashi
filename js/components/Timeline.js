// @flow

import { View, Text, WebView, Dimensions, Image } from 'react-native';
import YofukashiListView from './YofukashiListView';
import Actions from '../actions';
import type { State as TimelineState } from '../reducers/timeline';

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

export default function Timeline(props: { timeline: TimelineState, actions: typeof Actions }) {
  return (
    <YofukashiListView
      dataSource={props.timeline.statuses}
      renderRow={(v: any) => renderRow(v)}
      rowHasChanged={(r1, r2) => r1 !== r2}
    />
  );
}
