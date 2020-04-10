/**
 * @format
 */

import { AppRegistry } from 'react-native';

import App from './App';
import { name as appName } from './app.json';

import 'react-native-gesture-handler'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'
// import { store, persistor } from './src/Redux/store'
// import React from 'react'

// const RNRedux = (
//   <Provider store={store}>
//     <PersistGate persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>
// )

AppRegistry.registerComponent(appName, () => App);
