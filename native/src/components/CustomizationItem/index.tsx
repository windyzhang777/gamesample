import React, {useRef} from 'react';
import styles from './CustomizationItem.stylesheet';
import {TouchableOpacity, View} from 'react-native';

export interface CustomizationItemProps {
  componentStyle?: any;
  selected?: boolean;
  customizationKey: string;
  customizationValue: string;
  icon?: JSX.Element;
  onPress?: (key: string) => void;
}

export default function CustomizationItem({
  selected = false,
  onPress,
  icon,
  customizationValue,
}: CustomizationItemProps): JSX.Element {
  const iconCallbackRef = useRef(() => {});

  return (
    <View style={[selected ? styles.CustomizaitonItemBorder : styles.CustomizaitonItemNoBorder]}>
      <TouchableOpacity
        style={[styles.CustomizaitonItemIcon]}
        onPress={() => {
          iconCallbackRef.current();
          if (onPress) {
            onPress(customizationValue);
          }
        }}>
        {icon
          ? React.cloneElement(icon, {
              ref: iconCallbackRef,
            })
          : null}
      </TouchableOpacity>
    </View>
  );
}
