import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import styles from './ShoppingCart.stylesheet';
import {ShoppingCartItem} from 'src/store/shopping-cart/types';
import {ImageButton} from 'src/components/ImageButton';

import demoProfileImage from 'src/assets/images/demoProfileImage.png';
import BatIcon from 'src/components/icons/BatIcon';
import TreatButtonSvg from 'src/assets/images/TreatButton.png';
import TrickButtonSvg from 'src/assets/images/TrickButton.png';
import {LocalImage} from '../LocalImage';

interface CartItemProps {
  item: ShoppingCartItem;
  onRemoveFromCart: (item: ShoppingCartItem) => void;
}

interface CartProps {
  cartItems?: ShoppingCartItem[];
  goForward?: any;
  goBack?: any;
  onRemoveFromCart?: (item: ShoppingCartItem) => void;
  totalBeforeTax?: number;
}

const CartItem = ({item, onRemoveFromCart}: CartItemProps) => {
  return (
    <View style={styles.CartItem}>
      <BatIcon />
      <View>
        <Text style={styles.DisplayText}>{`${item.quantity} Candy Credits`}</Text>
        <Text style={styles.DisplayText}>{`Cost: $${item.cost}`}</Text>
      </View>
      <ImageButton
        Svg={TrickButtonSvg}
        text="Remove"
        onPress={() => onRemoveFromCart(item)}
        textStyle={styles.RemoveFromCartButtonText}
        style={styles.RemoveFromCartButton}
      />
    </View>
  );
};

const ShoppingCartComponent = ({
  goForward,
  goBack,
  cartItems,
  onRemoveFromCart,
  totalBeforeTax,
}: CartProps) => {
  const hasCartItems = cartItems && cartItems.length > 0;

  return (
    <ScrollView contentContainerStyle={styles.ShoppingCartScrollView}>
      <LocalImage source={demoProfileImage} />
      <Text style={styles.DisplayText}>Shopping Cart</Text>
      <View style={styles.ShoppingCartItemsView}>
        {cartItems &&
          cartItems.map((item: ShoppingCartItem) => (
            <CartItem
              key={`shopping-cart-item-${item.id}`}
              item={item}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))}
      </View>
      <Text style={styles.DisplayText}>Subtotal: ${totalBeforeTax}</Text>
      <ImageButton
        Svg={TreatButtonSvg}
        text={hasCartItems ? 'Proceed to Checkout' : 'Go Back'}
        onPress={() =>
          hasCartItems ? (goForward ? goForward() : undefined) : goBack ? goBack() : undefined
        }
        textStyle={styles.CartButtonText}
        style={styles.CartButton}
      />
    </ScrollView>
  );
};

export default ShoppingCartComponent;
