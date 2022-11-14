import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  Door: {
    width: '80%',
    height: '80%',
  },
  DoorName: {
    color: '#ffffff',
    fontSize: 26,
    marginBottom: 12,
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignContent: 'center',
    justifyContent: 'center',
  },
  TrickOrTreat: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  TrickOrTreatButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  TrickOrTreatActions: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
  },
  TrickButtonText: {
    color: '#333333',
    position: 'absolute',
    fontWeight: '700',
    fontSize: 22,
  },
  TreatButtonText: {
    color: '#ffffff',
    position: 'absolute',
    fontWeight: '700',
    fontSize: 22,
  },
});
