import {StyleSheet} from 'react-native';
import {topBarPrimaryColor, topBarTitleColor} from 'shared/theme/variables';

export default StyleSheet.create({
  TopBar: {
    flexDirection: 'row',
    backgroundColor: topBarPrimaryColor,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  TopBarTitle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    color: topBarTitleColor,
  },
  TopBarDrawerIcon: {
    width: 32,
    height: 32,
    marginLeft: 15,
  },
  TopBarShareIcon: {
    width: 32,
    height: 32,
    marginRight: 15,
  },
});
