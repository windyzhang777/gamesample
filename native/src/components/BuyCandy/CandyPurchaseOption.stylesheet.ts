import {StyleSheet} from 'react-native';
import {modalBackgroundColor} from 'src/theme/variables';

export default StyleSheet.create({
  CandyPurchaseOption: {
    backgroundColor: modalBackgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  DisplayText: {
    color: '#ffffff',
    marginBottom: 14,
  },
  AddToCartButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 120,
  },
  AddToCartButtonText: {
    color: '#ffffff',
    position: 'absolute',
    fontWeight: '700',
    fontSize: 12,
  },
  AddToCartSelectedButtonText: {
    color: '#333333',
    position: 'absolute',
    fontWeight: '700',
    fontSize: 12,
  },
});
