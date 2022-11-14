import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  CustomizationHeader: {
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  CustomizationHeaderImage: {},
  CustomizationHeaderText: {
    position: 'absolute',
    fontFamily: 'Tungsten-Bold',
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    top: 18,
    textTransform: 'uppercase',
  },
});
