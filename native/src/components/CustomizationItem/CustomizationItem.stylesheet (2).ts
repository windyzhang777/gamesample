import {StyleSheet} from 'react-native';

const borderRadius = 25;
const borderWidth = 3;
export default StyleSheet.create({
  CustomizaitonItem: {
    flexGrow: 0,
  },
  CustomizaitonItemBorder: {
    borderRadius: borderRadius + borderWidth,
    borderWidth: borderWidth,
    borderColor: '#ADEDF9',
    padding: 1,
    shadowColor: '#0578BD',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
  },
  CustomizaitonItemNoBorder: {
    margin: borderWidth + 1,
  },
  CustomizaitonItemIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffee',
    borderRadius: borderRadius,
  },
});
