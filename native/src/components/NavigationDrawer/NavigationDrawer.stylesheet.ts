import {StyleSheet} from 'react-native';
import {navigationPrimaryColor} from 'shared/theme/variables';

export default StyleSheet.create({
  NavigationDrawer: {
    flex: 1,
    padding: 30,
    backgroundColor: navigationPrimaryColor,
  },
  NavigationDrawerClose: {
    width: 24,
    height: 24,
  },
});
