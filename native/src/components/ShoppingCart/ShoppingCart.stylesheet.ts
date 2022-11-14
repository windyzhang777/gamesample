import {StyleSheet} from 'react-native';
import {modalBackgroundColor} from 'src/theme/variables';

export default StyleSheet.create({
  ShoppingCartScrollView: {
    backgroundColor: modalBackgroundColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  ShoppingCartItemsView: {
    backgroundColor: modalBackgroundColor,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CartItem: {
    display: 'flex',
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 14,
    margin: 8,
  },
  DisplayText: {
    color: '#ffffff',
    marginBottom: 14,
  },
  RemoveFromCartButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 100,
    maxWidth: 100,
  },
  RemoveFromCartButtonText: {
    color: '#333333',
    position: 'absolute',
    fontWeight: '700',
    fontSize: 12,
  },
  CartButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
  },
  CartButtonText: {
    color: '#ffffff',
    position: 'absolute',
    fontWeight: '700',
    fontSize: 14,
  },
});
