import {TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './ColorButton.stylesheet';

export interface ColorButtonProps {
  color: string;
  isActive: boolean;
  onPress: (color: string) => void;
}

const ColorButton = ({color, isActive, onPress}: ColorButtonProps) => {
  let appliedStyles = [];
  appliedStyles.push(styles.button);

  if (isActive) {
    appliedStyles.push(styles.active);
  }

  appliedStyles.push({backgroundColor: color});

  return <TouchableOpacity style={appliedStyles} onPress={() => onPress(color)} />;
};

export default ColorButton;
