import React from 'react';
import SharedCustomizationFlowNavigation, {
  CustomizationFlowNavigationProps,
} from 'shared/containers/CustomizationFlowNavigation';
import styles from './CustomizationFlowNavigation.stylesheet';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function CustomizationFlowNavigation(
  props: CustomizationFlowNavigationProps,
): JSX.Element {
  return (
    <SharedCustomizationFlowNavigation
      {...props}
      renderComponent={({
        previousText,
        nextText,
        showPreviousButton,
        showNextButton,
        onPreviousCallback,
        onNextCallback,
      }: CustomizationFlowNavigationProps) => {
        return (
          <LinearGradient
            colors={['#274B91', '#274B91', '#142C66']}
            style={styles.CustomizationFlowNavigation}>
            {showPreviousButton ? (
              <TouchableOpacity
                onPress={onPreviousCallback}
                style={[
                  styles.CustomizationFlowNavigationButton,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    marginRight: showNextButton ? 8 : 0,
                  },
                ]}>
                <Text style={styles.CustomizationFlowNavigationText}>{previousText}</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {showNextButton ? (
              <TouchableOpacity
                onPress={onNextCallback}
                style={[
                  styles.CustomizationFlowNavigationButton,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor: '#B1CC4E',
                  },
                ]}>
                <Text style={styles.CustomizationFlowNavigationText}>{nextText}</Text>
              </TouchableOpacity>
            ) : (
              <></>
            )}
          </LinearGradient>
        );
      }}
    />
  );
}
