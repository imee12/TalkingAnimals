import React, { Component } from 'react';
import Speech from 'react-native-speech';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import  { items }  from '../store/data.js';

export default class Animal extends Component {

  talk(text) {
    //if(this.state.animal != null) {
      console.log(text);
      console.log(this.state);
      Speech.speak({
         text: text,
         voice: 'en-AU'
      })
      .then(started => {
        console.log('Speech started');
      })
      .catch(error => {
        console.log('You\'ve already started a speech instance.');
      });

   }

  // static propTypes = {
  //   className: PropTypes.string,
  //   icon: PropTypes.string.isRequired,
  //   altText: PropTypes.string,
  // };
  //
  // static defaultProps = {
  //   className: '',
  //   altText: '',
  // };

  render() {
    console.log(this.props);
    return (
    <View style={{position: 'absolute', top: 50}}>
      <Image
         resizeMode="cover"
         style={{width: 400, height: 500}}
         source={this.props.animal.img}
       />
     <View style={{height: 400, backgroundColor: 'transparent', width: 400, position: 'absolute', top:140}}>
        <TouchableHighlight style={{height: 400, width: 400}} onPress={() => this.talk(this.props.animal.text)} underlayColor="white">
     <View style={{backgroundColor:'transparent'}}>
     </View>
     </TouchableHighlight>
     </View>
     </View>
);

  }
}
