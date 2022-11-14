import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  PointsCounter: {
    flexShrink: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  PointsCounterIcon: {
    position: 'absolute',
    zIndex: 1,
    left: -16,
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
  PointsCounterCountContainer: {
    borderColor: '#ADEDF9',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    backgroundColor: '#000C2E',
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 4,
  },
  PointsCounterCount: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'white',
  },
});
