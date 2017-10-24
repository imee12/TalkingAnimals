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
import Animal from '../components/Animal';


export default class Welcome extends Component {

  state = {
  animal: null,
  };

  componentDidMount = () => {

  this.loadAnimal();
  //  this._startHandler();
    Speech.supportedVoices()
      .then(locales => {
  //console.log(locales); // ["ar-SA", "en-ZA", "nl-BE", "en-AU", "th-TH", ...]
});

};

  loadAnimal = () => {
    items.forEach((item) => {
      const random = Math.floor(Math.random() * 6);

      if (item.number === random) {
        console.log(item);
    //  this.state.animal = item;
    this.setState(prevState => ({ ...prevState, animal: item}));

      console.log(this.state);
      }
    })
  }

   startHandler() {
   Speech.speak({
      text: 'Hello there, Ylvie!',
      voice: 'en-FR'
   })
   .then(started => {
     console.log('Speech started');
   })
   .catch(error => {
     console.log('You\'ve already started a speech instance.');
   });
 }

 // _talk(text) {
 //   //if(this.state.animal != null) {
 //     console.log(text);
 //     console.log(this.state);
 //     Speech.speak({
 //        text: text,
 //        voice: 'en-AU'
 //     })
 //     .then(started => {
 //       console.log('Speech started');
 //     })
 //     .catch(error => {
 //       console.log('You\'ve already started a speech instance.');
 //     });
 //
 //  }



 _pauseHandler() {
   Speech.pause();
 }

 _resumeHandler() {
   Speech.resume();
 }

 _stopHandler() {
   Speech.stop();
 }

 renderAnimalImg = () => {
   if(this.state.animal != null) {
     console.log(this.state, "thisstate");
     return (
       <Animal animal={this.state.animal} _talk={() => this._talk()}/>
      )
   }
 }

  render() {

    return (
      <ScrollView >
        <View >
          {this.renderAnimalImg()}
        </View>
        <View style={{height: 150, backgroundColor: 'white', width: 400, position: 'absolute', top:540}}>
          <Button  color='black' onPress={() => this.loadAnimal()} title="Meet More Animals!"/>
        </View>
      </ScrollView>
    )
  }

};
