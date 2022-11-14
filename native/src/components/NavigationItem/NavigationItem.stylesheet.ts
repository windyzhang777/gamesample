import {StyleSheet} from 'react-native';
import {navigationPrimaryColor} from 'shared/theme/variables';

export default StyleSheet.create({
  NavigationItemText: {
    backgroundColor: navigationPrimaryColor,
    alignContent: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
  },
  NavigationItemTextUnderline: {
    backgroundColor: '#4A5696',
    height: 1,
  },
});
