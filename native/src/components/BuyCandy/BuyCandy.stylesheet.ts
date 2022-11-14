import {StyleSheet} from 'react-native';
import {modalBackgroundColor} from 'src/theme/variables';

export default StyleSheet.create({
  BuyCandyScrollView: {
    backgroundColor: modalBackgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  CandyImage: {
    marginBottom: 12,
  },
  DisplayText: {
    color: '#ffffff',
  },
  PurchaseOptionsView: {
    backgroundColor: modalBackgroundColor,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CartButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  CartButtonText: {
    color: '#ffffff',
    position: 'absolute',
    fontWeight: '700',
    fontSize: 20,
  },
});
