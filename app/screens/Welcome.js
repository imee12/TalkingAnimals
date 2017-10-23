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


export default class Welcome extends Component {

  state = {
  animal: null,
  };

  componentDidMount = () => {

    items.forEach((item) => {
      const random = Math.floor(Math.random() * 2);

      if (item.number === random) {
        console.log(item);
    //  this.state.animal = item;
    this.setState(prevState => ({ ...prevState, animal: item}));

      console.log(this.state);
      }
    })
  //  this._startHandler();
    Speech.supportedVoices()
      .then(locales => {
  //console.log(locales); // ["ar-SA", "en-ZA", "nl-BE", "en-AU", "th-TH", ...]
});


    };

   _startHandler() {
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

 _talk(text) {
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



 _pauseHandler() {
   Speech.pause();
 }

 _resumeHandler() {
   Speech.resume();
 }

 _stopHandler() {
   Speech.stop();
 }

 _renderAnimalImg = () => {
   if(this.state.animal) {
     console.log(this.state);
     return (
       <View>
     <Image
          resizeMode="cover"
          style={{width: 400, height: 500}}
          source={this.state.animal.img}
        />
        <View style={{height: 400, backgroundColor: 'transparent', width: 400, position: 'absolute', top:140}}>
           <TouchableHighlight style={{height: 400, width: 400}} onPress={() => this._talk(this.state.animal.text)} underlayColor="white">
        <View style={{backgroundColor:'transparent'}}>
        </View>
        </TouchableHighlight>
        </View>
        </View>
      )
   }
 }

  render() {
   console.log(items);
    console.log(this.props, "this props");
    console.log(this.state, "this state");
  //  console.log(random);



  //  const { navigate } = this.props.navigation;

    return (
      <ScrollView >

        {/* {items.map(item =>
<View key={this.state.animal}> */}

        <View >
          {this._renderAnimalImg()}

       {/* <Image
            resizeMode="cover"
            style={{width: 400, height: 500}}
            source={this.state.animal.img}
          /> */}

        </View>


        {/* <View style={{height: 100, backgroundColor: 'transparent', width: 400, position: 'absolute', top:10}}>
           <TouchableHighlight style={{height: 100, width: 400, backgroundColor:'transparent'}} onPress={this._startHandler} underlayColor="white">
        <View style={{backgroundColor:'transparent'}}></View>
        </TouchableHighlight>
        </View>
        <View style={{height: 400, backgroundColor: 'transparent', width: 400, position: 'absolute', top:140}}>
           <TouchableHighlight style={{height: 400, width: 400}} onPress={this._talk("hey")} underlayColor="white">
        <View style={{backgroundColor:'transparent'}}>
        </View>
        </TouchableHighlight>
        </View>
        <View style={{height: 150, backgroundColor: 'pink', width: 400, position: 'absolute', top:520}}>
          <Button  color='black' onPress={() => navigate('Bunny', { user: 'Lucy' })} title="Meet the Bunny!"/>
        </View> */}




             {/* <Text >
           Cmd+D or shake for next screen
          </Text> */}
          {/* </View>
  )} */}

      </ScrollView>
    )
  }

};
