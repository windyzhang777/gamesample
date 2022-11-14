import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  CustomizationMessageSelector: {
    flex: 1,
    flexGrow: 1,
    justifyContent: 'center',
  },
  CustomizationMessageSelectorSelect: {
    height: 90,
    justifyContent: 'center',
    margin: 15,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#ADEDF9',
    padding: 24,
  },
  CustomizationMessageSelectorLabel: {
    backgroundColor: '#000C2E',
    alignSelf: 'flex-start',
    top: 26,
    left: 32,
    paddingHorizontal: 10,
    color: '#ADEDF9',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 999,
  },
  CustomizationMessageSelectorModal: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: '#000C2E',
  },
  CustomizationMessageSelectorSelectedText: {
    color: 'white',
    fontSize: 16,
  },
});
