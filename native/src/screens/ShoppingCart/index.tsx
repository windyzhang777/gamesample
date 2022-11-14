import React from 'react';
import ShoppingCartComponent from 'src/components/ShoppingCart';
import {useDispatch, useSelector} from 'react-redux';
import {
  shoppingCartItemsSelector,
  totalBeforeTaxSelector,
} from '../../store/shopping-cart/selectors';
import {ShoppingCartItem} from '../../store/shopping-cart/types';
import {removeFromCart} from '../../store/shopping-cart/actions';
import {useNavigation} from '@react-navigation/native';
import styles from '../../components/ShoppingCart/ShoppingCart.stylesheet';
import {Text} from 'react-native';

const ShoppingCart = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const totalBeforeTax = useSelector(totalBeforeTaxSelector);
  const cartItems = useSelector(shoppingCartItemsSelector);

  const handleRemoveFromCart = (item: ShoppingCartItem): void => {
    dispatch(removeFromCart(item));
  };

  return (
    <ShoppingCartComponent
      onRemoveFromCart={handleRemoveFromCart}
      cartItems={cartItems}
      goBack={navigation.goBack}
      goForward={() => alert('Checkout page not built yet')}
      totalBeforeTax={totalBeforeTax}
    />
  );
};

export default ShoppingCart;
