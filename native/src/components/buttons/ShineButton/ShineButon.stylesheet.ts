import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  ShineButton: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    borderRadius: 15,
  },
  ShineButtonUnderlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  ShineButtonShine: {
    position: 'absolute',
    top: 6,
  },
  ShineButtonText: {},
});
