// @flow

import { ListView, View, TouchableHighlight } from 'react-native';
import { Component } from 'react';

function renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: boolean) {
  return (
    <View
      key={`${sectionID}-${rowID}`}
      style={{
        height: adjacentRowHighlighted ? 4 : 1,
        backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#CCCCCC'
      }}
    />
  );
}

function renderRow<DS>(
  props: { ds: DS, render: (ds: DS) => React$Element<*>, onPressRow: ?(ds: DS) => void }
) {
  const { ds, render, onPressRow } = props;
  if (onPressRow) {
    return (
      <TouchableHighlight onPress={() => onPressRow(ds)}>{render(ds)}</TouchableHighlight>
    );
  }
  return <View>{render(ds)}</View>;
}

type Props<DS> = {
  renderHeader?: Function,
  renderRow: (ds: DS) => React$Element<any>,
  renderFooter?: Function,
  dataSource: DS[],
  rowHasChanged: (r1: DS, r2: DS) => boolean,
  onPressRow?: ?(rowData: DS) => any
};

type state = { dataSource: any };

export default class YofukashiListView<DS> extends Component<void, Props<DS>, any> {
  state: state;
  props: Props<DS>

  constructor(props: Props<DS>) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: props.rowHasChanged });
    this.state = { dataSource: ds.cloneWithRows(props.dataSource) };
  }

  componentWillReceiveProps(nextProps: Props<DS>) {
    if (nextProps.dataSource !== this.props.dataSource) {
      this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource) });
    }
  }

  render() {
    return (
      <ListView
        renderHeader={() => (this.props.renderHeader ? this.props.renderHeader() : null)}
        dataSource={this.state.dataSource}
        renderRow={ds =>
          renderRow({ ds, render: this.props.renderRow, onPressRow: this.props.onPressRow })}
        renderSeparator={renderSeparator}
        enableEmptySections
        renderFooter={() => (this.props.renderFooter ? this.props.renderFooter() : null)}
      />
    );
  }
}
