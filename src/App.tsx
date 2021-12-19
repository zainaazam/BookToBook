import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider} from 'styled-components';
import RootStackNavigation from './Navigation/RootNavigation';
import {View} from 'react-native';
import {default_theme} from './Theme';
import {Provider} from 'react-redux';
import {persistor, store} from './Store';
import {PersistGate} from 'redux-persist/integration/react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {GQL_URI} from './Configs';
// import {ApolloProvider} from 'react-apollo';
// import {ApolloClient} from 'apollo-client';
// import {HttpLink} from 'apollo-link-http';
// import {InMemoryCache} from 'apollo-cache-inmemory';

// const makeApolloClient = () => {
//   // create an apollo link instance, a network interface for apollo client
//   const link = new HttpLink({
//     uri: `https://localhost:6400/graphql/`,
//   });

//   // create an inmemory cache instance for caching graphql data
//   const cache = new InMemoryCache();

//   // instantiate apollo client with apollo link instance and cache instance
//   const client = new ApolloClient({
//     link,
//     cache,
//   });

//   return client;
// };

// const httpLink = new HttpLink({uri: 'http://46.185.169.93:6400/graphql/v1.0'});

// export const client = new ApolloClient({
//   link: new HttpLink({uri: 'http://192.168.1.1:6400/graphql'}),
//   cache: new InMemoryCache(),
// });

export const client = new ApolloClient({
  uri: GQL_URI,
  cache: new InMemoryCache(),
});

// export const client = makeApolloClient();

const App = () => {
  return (
    <View style={styles.icon}>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <ThemeProvider theme={default_theme}>
            <PersistGate persistor={persistor}>
              <RootStackNavigation />
            </PersistGate>
          </ThemeProvider>
        </Provider>
      </ApolloProvider>
    </View>
  );
};

export default App;

export const styles = StyleSheet.create({
  icon: {
    flex: 1,
  },
});
