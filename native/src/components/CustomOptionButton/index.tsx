import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './CustomOptionButton.stylesheet';
import {CustomOption} from 'shared/models/CustomOption';

export interface CustomOptionButtonProps {
  id: string;
  image: string;
  isActive: boolean;
  onPress: (option: CustomOption) => void;
}

const CustomOptionButton = ({id, image, isActive, onPress}: CustomOptionButtonProps) => {
  let appliedStyles = [];
  appliedStyles.push(styles.button);

  if (isActive) {
    appliedStyles.push(styles.active);
  }

  return (
    <TouchableOpacity style={appliedStyles} onPress={() => onPress({id})}>
      <Image source={{uri: image}} style={styles.image} />
    </TouchableOpacity>
  );
};

export default CustomOptionButton;
