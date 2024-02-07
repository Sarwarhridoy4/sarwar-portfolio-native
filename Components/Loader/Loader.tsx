import LottieView from 'lottie-react-native';
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Loader = () => {
  return (
    <View style={[styles.loaderContainer]}>
      <Text style={[styles.loaderContainer, styles.loading]}>Loading...</Text>
      <LottieView
        source={require('../../Resources/Loading.json')}
        style={styles.activityIndicatorStyle}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicatorStyle: {
    width: '100%',
    height: '100%',
  },
  loading: {
    fontSize: 50,
    color: '#000',
  },
});
