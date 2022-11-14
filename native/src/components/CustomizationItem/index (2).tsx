import React, {useRef} from 'react';
import SharedCustomizationItem, {CustomizationItemProps} from 'shared/containers/CustomizationItem';
import styles from './CustomizationItem.stylesheet';
import {TouchableOpacity, View} from 'react-native';

export default function CustomizationItem(props: CustomizationItemProps): JSX.Element {
  let iconCallbackRef = useRef(() => {});
  return (
    <SharedCustomizationItem
      {...props}
      renderComponent={({selected, customizationValue, icon, onPress}: CustomizationItemProps) => {
        return (
          <View
            style={[selected ? styles.CustomizaitonItemBorder : styles.CustomizaitonItemNoBorder]}>
            <TouchableOpacity
              style={[styles.CustomizaitonItemIcon]}
              onPress={() => {
                iconCallbackRef.current();
                onPress ? onPress(customizationValue) : null;
              }}>
              {icon
                ? React.cloneElement(icon, {
                    ref: iconCallbackRef,
                  })
                : null}
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}
