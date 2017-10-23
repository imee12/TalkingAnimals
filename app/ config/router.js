import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
//import Icon from 'react-native-vector-icons/Ionicons';

import Welcome from '../containers/App';
//import Bunny from '../screens/Bunny';

//import NewContact from '../screens/NewContact';
//import Me from '../screens/Me';
//import Details from '../screens/Details';
//import { capitalizeFirstLetter } from '../helpers/string';
//import { DrawerButton } from '../components/Header';

const LeftDrawerButton = ({ navigate }) => {
  if (Platform.OS === 'android') {
    //return <DrawerButton onPress={() => navigate('DrawerOpen')} />;
    return <div></div>
  }

  return null;
};

export const ContactsStack = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => ({
      //title: 'Contacts',
    //  headerLeft: <LeftDrawerButton {...navigation} />
    }),
  },
  // Bunny: {
  //   screen: Bunny,
  //   navigationOptions: ({ navigation }) => ({
  //
  //   }),
  // },
});
