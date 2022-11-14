import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ProfileSeleciton: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#DDFAFF',
  },
  ProfileSelecitonHeading: {
    alignSelf: 'center',
    fontSize: 32,
    color: '#000C2E',
    textTransform: 'uppercase',
    fontFamily: 'Tungsten-Bold',
    marginVertical: 64,
  },
  ProfileSelecitonLogoutButton: {
    paddingVertical: 14,
    textTransform: 'uppercase',
    fontFamily: 'Tungsten-Bold',
    fontSize: 18,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 25,
    marginHorizontal: 90,
    alignItems: 'center',
    marginBottom: 32,
  },
});
