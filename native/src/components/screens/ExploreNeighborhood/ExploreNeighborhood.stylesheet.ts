import {StyleSheet} from 'react-native';
import {
  modalBackgroundColor,
  navigationPrimaryColor,
  modalBackButtonColor,
} from 'shared/theme/variables';

export default StyleSheet.create({
  ModalClose: {
    width: 24,
    height: 24,
    color: navigationPrimaryColor,
    alignSelf: 'flex-end',
  },
  ModalView: {
    backgroundColor: modalBackgroundColor,
    height: '100%',
  },
  ModalBackButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: modalBackButtonColor,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 32,
    paddingVertical: 12,
    width: 180,
    height: 48,
    marginBottom: 80,
  },
  ModalBackButtonText: {
    color: modalBackButtonColor,
    textTransform: 'uppercase',
  },
  page: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
  },
  tester: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
});
