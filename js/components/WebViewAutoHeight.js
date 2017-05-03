// @flow

import { WebView } from 'react-native';
import React from 'react';

const BODY_TAG_PATTERN = /<\/ *body>/;

const script = `
  ;(function() {
  var wrapper = document.createElement("div");
  wrapper.id = "height-wrapper";
  while (document.body.firstChild) {
    wrapper.appendChild(document.body.firstChild);
  }
  document.body.appendChild(wrapper);
  var i = 0;
  function updateHeight() {
    document.title = wrapper.clientHeight;
    window.location.hash = ++i;
  }
  updateHeight();
  window.addEventListener("load", function() {
    updateHeight();
    setTimeout(updateHeight, 1000);
  });
  window.addEventListener("resize", updateHeight);
  }());
`;

const injection = `
  <style>
    body, html, #height-wrapper {
      margin: 0;
      padding: 0;
    }
    #height-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
    p {
      margin: 0;
      padding: 0;
    }
  </style>
  <script>
    ${script}
  </script>
`;

const codeInject = html => html.replace(BODY_TAG_PATTERN, `${injection}</body>`);

const MIN_HEIGHT = 20;
export default class WebViewAutoHeight extends React.Component {
  props: any;
  state: any;
  _handleNavigationChange: Function;
  _webview: any;

  constructor(props: any) {
    super(props);
    this._handleNavigationChange = this.handleNavigationChange.bind(this);
    this.state = {
      contentHeight: this.props.minHeight || MIN_HEIGHT,
    };
  }

  handleNavigationChange(navState: any) {
    this._webview.stopLoading();
    if (navState.title) {
      const contentHeight = parseInt(navState.title, 10) || 0;
      this.setState({ contentHeight });
    }
    if (typeof this.props.onNavigationStateChange === 'function') {
      this.props.onNavigationStateChange(navState);
    }
  }

  render() {
    const { source, style, ...otherProps } = this.props;
    const html = `<body>${source.html}</body>`;

    if (!html) {
      throw new Error('WebViewAutoHeight supports only source.html');
    }

    return (
      <WebView
        {...otherProps}
        ref={(ref) => { this._webview = ref; }}
        source={{ html: codeInject(html) }}
        scrollEnabled={false}
        style={[style, { height: Math.max(this.state.contentHeight, MIN_HEIGHT) }]}
        javaScriptEnabled
        onNavigationStateChange={this._handleNavigationChange}
      />
    );
  }
}
