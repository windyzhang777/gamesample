import {StyleSheet} from 'react-native';
import {navigationPrimaryColor, modalBackButtonColor} from 'src/theme/variables';

export default StyleSheet.create({
  ModalClose: {
    width: 24,
    height: 24,
    color: navigationPrimaryColor,
    alignSelf: 'flex-end',
  },
  ModalView: {
    backgroundColor: '#5c446f',
    height: '100%',
  },
  ModalBackButtonText: {
    color: modalBackButtonColor,
    textTransform: 'uppercase',
  },
  Text: {
    fontSize: 26,
    color: '#FFFFFF',
    fontFamily: 'Tungsten-Bold',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    margin: 15,
  },
  Button: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    margin: 10,
  },
  ButtonText: {
    fontSize: 26,
    color: '#FFFFFF',
    fontFamily: 'Tungsten-Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
