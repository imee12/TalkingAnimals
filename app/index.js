//
// import React, { Component } from 'react';
// import {
//     View,
//     Text,
// } from 'react-native';
//
// // Unless you are exporting multiple things from a single file, you should just use this.
// // It's more idiomatic than using module.exports = ReactApp;
// // export default class ReactApp extends Component {
// //     render() {
// //         return (
// //             <View><Text>Hello world</Text></View>
// //         );
// //     }
// // }
//

// import React from 'react'
// import {
//   AppRegistry
// } from 'react-native'
//
// import { Provider } from 'react-redux'
// import configureStore from './configureStore'
// import App from './app/containers/App'
//
// const store = configureStore()
//
// const ReduxApp = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )


import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';


import configureStore from './store/configureStore'
import App from './containers/App'
//import { ContactsStack } from './config/router';


const store = configureStore()

export const ContactsStack = StackNavigator({
  Welcome: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      title: 'Contacts',
     headerLeft: <LeftDrawerButton {...navigation} />
    }),
  },
  // Bunny: {
  //   screen: Bunny,
  //   navigationOptions: ({ navigation }) => ({
  //
  //   }),
  // },
});


export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App>
          <ContactsStack />
        </App>
      </Provider>
    )
  }
}
