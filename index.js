// // import React from 'react'
// // import {
// //   AppRegistry
// // } from 'react-native'
// //
// // // import { Provider } from 'react-redux'
// // // import configureStore from './configureStore'
// // // //import App from './App'
// // // // import reducers from './reducers'
// // // // import thunk from 'redux-thunk';
// // import ReduxApp from './index.js'
// // //
// // //
// // // const store = configureStore(reducers)
// // //
// // // const ReduxApp = () => (
// // //   <Provider store={store}>
// // //     <App />
// // //   </Provider>
// // )
// //
// // AppRegistry.registerComponent('Animal', () => ReduxApp)
//
// import { AppRegistry } from 'react-native'
// import App from './app/index'
//
//
// AppRegistry.registerComponent('Animal', () => App)


import { AppRegistry } from 'react-native'
import App from './app/index'


AppRegistry.registerComponent('Animal', () => App)
