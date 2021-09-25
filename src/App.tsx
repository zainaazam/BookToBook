import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';
// import ErrorBoundary from 'react-native-error-boundary';
import RootStackNavigation from './Navigation/RootNavigation';
import {View} from 'react-native';
import {default_theme} from './Theme';

const App = () => {
  return (
    <View style={styles.icon}>
      {/* <ErrorBoundary
      onError={(error: Error) => {
        crashlytics().recordError(error);
      }}> */}
      {/* <Provider> */}
      <ThemeProvider theme={default_theme}>
        {/* <PersistGate persistor={persistor}> */}
        <RootStackNavigation />
        {/* </PersistGate> */}
      </ThemeProvider>
      {/* </Provider> */}
      {/* </ErrorBoundary> */}
    </View>
  );
};

export default App;

export const styles = StyleSheet.create({
  icon: {
    flex: 1,
  },
});
