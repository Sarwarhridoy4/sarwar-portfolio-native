import React from 'react';
import {StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import WebView from 'react-native-webview';
import Loader from './Components/Loader/Loader';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <StatusBar backgroundColor={'#8105ed'} />
        <SafeAreaView style={styles.container}>
          <WebView
            source={{uri: 'https://sarwar-hossain-hridoy.web.app/'}}
            style={styles.webView}
            //Enable Javascript support
            javaScriptEnabled={true}
            //For the Cache
            domStorageEnabled={true}
            //View to show while loading the webpage
            renderLoading={Loader}
            //Want to show the view or not
            startInLoadingState={true}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  webView: {
    flex: 1,
  },
});
