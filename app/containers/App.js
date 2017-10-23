import { connect } from 'react-redux';

import * as actions from '../actions/actions';

import Welcome from '../screens/Welcome';
//import  { items }  from '../store/data.js';


const mapStateToProps = state => ({
//  animal: animal,
//  items: state.items,
});

const mapDispatchToProps = dispatch => ({
//  getVeteran: (fileNumber) => { dispatch(actions.getVeteran(fileNumber)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);



// import React, { Component, PropTypes } from 'react'
// //import { View, StyleSheet } from 'react-native'
// import { connect } from 'react-redux'
//
// //import { actionCreators } from '../redux/todoRedux'
// // import Title from '../components/Title'
// // import Input from '../components/Input'
// // import List from '../components/List'
// // import Footer from '../components/Footer'
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Button,
//   ScrollView,
//   TouchableHighlight
// } from 'react-native';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   divider: {
//     height: 1,
//     backgroundColor: 'whitesmoke',
//   },
// })
//
// const mapStateToProps = (state) => ({
//   items: state.items,
// })
//
// class App extends Component {
//
//   // static propTypes = {
//   //   items: PropTypes.array.isRequired,
//   //   dispatch: PropTypes.func.isRequired,
//   // }
//   //
//   // addItem = (item) => {
//   //   const {dispatch} = this.props
//   //   dispatch(actionCreators.addItem(item))
//   // }
//   //
//   // removeItem = (index) => {
//   //   const {dispatch} = this.props
//   //   dispatch(actionCreators.removeItem(index))
//   // }
//   //
//   // toggleItemCompleted = (index) => {
//   //   const {dispatch} = this.props
//   //   dispatch(actionCreators.toggleItemCompleted(index))
//   // }
//   //
//   // removeCompleted = () => {
//   //   const {dispatch} = this.props
//   //   dispatch(actionCreators.removeCompleted())
//   // }
//
//   render() {
//   //  const {items} = this.props
//
//     return (
//       <View>
//         <Text>
//           hey
//         </Text>
//       </View>
//       // <View style={styles.container}>
//       //   <Title> Todo List </Title>
//       //   <Input
//       //     placeholder={'Enter an item!'}
//       //     onSubmit={this.addItem}
//       //   />
//       //   <View style={styles.divider}/>
//       //   <List
//       //     items={items}
//       //     onRemoveItem={this.removeItem}
//       //     onToggleItemCompleted={this.toggleItemCompleted}
//       //   />
//       //   <View style={styles.divider} />
//       //   <Footer onRemoveCompleted={this.removeCompleted} />
//       // </View>
//     )
//   }
// }
//
// export default connect(mapStateToProps)(App)
