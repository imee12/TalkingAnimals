import React, { PropTypes } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//import styles from './styles';

const DrawerButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{marginLeft: 20, backgroundColor: 'red', width: 100, height: 100}}>
    <Text>hey</Text>
    {/* <Icon name="md-menu" size={22} /> */}
  </TouchableOpacity>
);

// DrawerButton.propTypes = {
//   onPress: PropTypes.func,
// };

export default DrawerButton;
