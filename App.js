import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
const INJECTED_JAVASCRIPT = `(function() {
 const meta = document.createElement('meta'); 
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'); 
        meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); 
})();`;
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: 'https://calendar.switchport.app/110' }} style={styles.webview}
      onMessage={(event) => {}}
      injectedJavaScript={INJECTED_JAVASCRIPT} 
      webviewDebuggingEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});