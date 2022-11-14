import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ShoppingCartItem} from '../store/shopping-cart/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootStoreState} from '../models/RootStoreState';
import {shoppingCartItemsSelector} from '../store/shopping-cart/selectors';
import {addToCart, removeFromCart} from '../store/shopping-cart/actions';
import BuyCandy from 'src/components/BuyCandy';

export interface BuyCandyViewProps {
  buyCandy: (amount: number) => void;
  cartItems: ShoppingCartItem[];
  currentCandy: number;
  copy: {
    button: string;
  };
  onAddToCart: (item: ShoppingCartItem) => void;
  onRemoveFromCart: (item: ShoppingCartItem) => void;
}

const purchaseOptions: ShoppingCartItem[] = [
  {
    id: 0,
    quantity: 30,
    cost: 5,
  },
  {
    id: 1,
    quantity: 70,
    cost: 10,
  },
  {
    id: 2,
    quantity: 160,
    cost: 20,
  },
  {
    id: 3,
    quantity: 300,
    cost: 35,
  },
  {
    id: 4,
    quantity: 500,
    cost: 50,
  },
  {
    id: 5,
    quantity: 1100,
    cost: 100,
  },
];

const ConnectedBuyCandy = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const currentCandy = useSelector((state: RootStoreState) => state.candyBowl.candy);
  const cartItems = useSelector(shoppingCartItemsSelector);

  // const buyCandy = (amount: number) => {
  //   buyCandyAction({amount}, dispatch);
  // };

  const handleAddToCart = (item: ShoppingCartItem) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item: ShoppingCartItem) => {
    dispatch(removeFromCart(item));
  };

  return (
    <BuyCandy
      cartItems={cartItems}
      currentCandy={currentCandy}
      onAddToCart={handleAddToCart}
      onCartPress={() => navigation.navigate('ShoppingCart')}
      onRemoveFromCart={handleRemoveFromCart}
    />
  );
};

export default ConnectedBuyCandy;
