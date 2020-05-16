import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class VideoCallBarTender extends React.Component {
  render() {
    return <WebView source={{ uri: 'http://104.154.21.87:8200/' }} style={{ marginTop: 20 }} />;
  }
}