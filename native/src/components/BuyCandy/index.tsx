import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import styles from './BuyCandy.stylesheet';
import demoProfileImage from 'src/assets/images/demoProfileImage.png';
import {CandyPurchaseOption} from './CandyPurchaseOption';
import ActiveBat from 'src/assets/images/ActiveBat.png';
import TreatButton from 'src/assets/images/TreatButton.png';
import TrickButton from 'src/assets/images/TrickButton.png';
import {ShoppingCartItem} from 'src/store/shopping-cart/types';
import {LocalImage} from 'src/components/LocalImage';
import {ImageButton} from 'src/components//ImageButton';
import {Container} from 'src/components/Container';

export interface BuyCandyViewProps {
  cartItems: ShoppingCartItem[];
  currentCandy: number;
  onAddToCart: (item: ShoppingCartItem) => void;
  onRemoveFromCart: (item: ShoppingCartItem) => void;
  onCartPress: any;
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

const ConnectedBuyCandy = ({
  cartItems,
  currentCandy,
  onAddToCart,
  onRemoveFromCart,
  onCartPress,
}: BuyCandyViewProps) => {
  return (
    <Container testID="BuyCandy">
      <ScrollView contentContainerStyle={styles.BuyCandyScrollView} scrollEnabled={true}>
        <LocalImage source={demoProfileImage} />
        <Text style={styles.DisplayText}>Your Candy Bowl: {currentCandy} Candy Credits Left</Text>
        <View style={styles.PurchaseOptionsView}>
          {purchaseOptions &&
            purchaseOptions.map((po) => (
              <CandyPurchaseOption
                key={`candy-purchase-option-${po.id}`}
                buttonText="Add to Cart"
                selectedButtonText="Added"
                source={ActiveBat}
                imageStyle={styles.CandyImage}
                item={po}
                isSelected={Boolean(cartItems?.find((item: ShoppingCartItem) => item.id === po.id))}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
        </View>
        {cartItems && cartItems.length > 0 && (
          <ImageButton
            source={TrickButton}
            text="My Cart"
            onPress={onCartPress}
            textStyle={styles.CartButtonText}
            style={styles.CartButton}
          />
        )}
      </ScrollView>
    </Container>
  );
};

export default ConnectedBuyCandy;
