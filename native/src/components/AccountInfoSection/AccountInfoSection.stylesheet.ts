import {StyleSheet} from 'react-native';
import {navigationPrimaryColor} from 'shared/theme/variables';

export default StyleSheet.create({
  AccountInfoSection: {
    backgroundColor: navigationPrimaryColor,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AccountInfoSectionProfileImage: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  AccountInfoSectionProfileImageContainer: {
    width: 75,
    height: 75,
    marginRight: 20,
  },
  AccountInfoSectionUsername: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
});
