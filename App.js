import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
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
      userAgent={Platform.OS === 'android' ? 'Chrome/18.0.1025.133 Mobile Safari/535.19' : 'AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.75'}
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