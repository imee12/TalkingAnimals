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
import { items } from '../config/data';






export default class Welcome extends Component {

  componentDidMount = () => {
    this._startHandler();
    Speech.supportedVoices()
      .then(locales => {
  console.log(locales); // ["ar-SA", "en-ZA", "nl-BE", "en-AU", "th-TH", ...]
});
    };
   _startHandler() {
   Speech.speak({
      text: 'Welcome, Ylvie! Bonjour petite fille!',
      voice: 'fr-FR'
   })
   .then(started => {
     console.log('Speech started');
   })
   .catch(error => {
     console.log('You\'ve already started a speech instance.');
   });
 }

 _pig() {
 Speech.speak({
    text: 'I am a bunny! Hop! Hop!',
    voice: 'en-FR'
 })
 .then(started => {
   console.log('Speech started');
 })
 .catch(error => {
   console.log('You\'ve already started a speech instance.');
 });
}

 _pauseHandler() {
   Speech.pause();
 }

 _resumeHandler() {
   Speech.resume();
 }

 _stopHandler() {
   Speech.stop();
 }

  render() {
    return (
      <ScrollView >
        <View style={{position: 'absolute', top: 20, backgroundColor: 'white'}}>
          <Image
            resizeMode="cover"
            style={{width: 400, height: 500}}
            source={require('../images/bunny.png')}
          />
        </View>
        <View style={{height: 100, backgroundColor: 'transparent', width: 400, position: 'absolute', top:10}}>
           <TouchableHighlight style={{height: 100, width: 400, backgroundColor:'transparent'}} onPress={this._startHandler} underlayColor="white">
        <View style={{backgroundColor:'transparent'}}></View>
        </TouchableHighlight>
        </View>
        <View style={{height: 400, backgroundColor: 'transparent', width: 400, position: 'absolute', top:140}}>
           <TouchableHighlight style={{height: 400, width: 400}} onPress={this._pig} underlayColor="white">
        <View style={{backgroundColor:'transparent'}}>
        </View>
        </TouchableHighlight>
        </View>



        <Text >
        </Text>
             {/* <Text >
           Cmd+D or shake for next screen
          </Text> */}

      </ScrollView>
    )
  }

};
