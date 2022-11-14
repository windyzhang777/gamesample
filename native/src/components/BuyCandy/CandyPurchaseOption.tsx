import React, {useCallback} from 'react';

import {View, Image, ImageSourcePropType, ImageStyle, StyleProp, Text} from 'react-native';
import {ImageButton} from 'src/components/ImageButton';

import TreatButton from 'src/assets/images/TreatButton.png';
import TrickButton from 'src/assets/images/TrickButton.png';

import styles from './CandyPurchaseOption.stylesheet';
import {ShoppingCartItem} from 'src/store/shopping-cart/types';
import {LocalImage} from '../LocalImage';

export interface CandyPurchaseOptionProps {
  buttonText: string;
  imageStyle?: StyleProp<ImageStyle>;
  onAddToCart: (item: ShoppingCartItem) => void;
  onRemoveFromCart: (item: ShoppingCartItem) => void;
  item: ShoppingCartItem;
  source?: any;
  isSelected: boolean;
  selectedButtonText: string;
  Svg?: any;
}

export const CandyPurchaseOption = ({
  buttonText,
  imageStyle,
  isSelected,
  onAddToCart,
  onRemoveFromCart,
  item,
  selectedButtonText,
  source,
  Svg,
}: CandyPurchaseOptionProps) => {
  const handleButtonPress = useCallback(() => {
    if (isSelected) {
      onRemoveFromCart(item);
    } else {
      onAddToCart(item);
    }
  }, [isSelected, onAddToCart, onRemoveFromCart, item]);
  return (
    <View style={styles.CandyPurchaseOption}>
      <Text style={styles.DisplayText}>{item.quantity} Candy Credits</Text>
      {source && <LocalImage source={source} style={imageStyle} />}
      {Svg && <Svg style={imageStyle} width="100%" />}
      <Text style={styles.DisplayText}>Cost: ${item.cost}</Text>
      <ImageButton
        text={isSelected ? selectedButtonText : buttonText}
        source={isSelected ? TrickButton : TreatButton}
        onPress={handleButtonPress}
        style={styles.AddToCartButton}
        textStyle={isSelected ? styles.AddToCartSelectedButtonText : styles.AddToCartButtonText}
      />
    </View>
  );
};
