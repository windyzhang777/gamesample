import React from 'react';
import {Text} from 'react-native';
import styles from './CustomizationFlowNavigation.stylesheet';
import ShineButton from 'src/components/buttons/ShineButton';
import LinearGradient from 'react-native-linear-gradient';

export interface CustomizationFlowNavigationProps {
  previousText?: string;
  nextText?: string;
  showPreviousButton?: boolean;
  showNextButton?: boolean;
  onPreviousCallback: () => void;
  onNextCallback: () => void;
}

export default function CustomizationFlowNavigation({
  previousText = 'Previous',
  nextText = 'Next',
  showPreviousButton = true,
  showNextButton = true,
  onPreviousCallback,
  onNextCallback,
}: CustomizationFlowNavigationProps) {
  return (
    <LinearGradient
      colors={['#274B91', '#274B91', '#142C66']}
      style={styles.CustomizationFlowNavigation}>
      {showPreviousButton ? (
        <ShineButton
          borderRadius={25}
          style={[
            styles.CustomizationFlowNavigationButton,
            {
              marginRight: showNextButton ? 8 : 0,
            },
          ]}
          buttonContent={<Text style={styles.CustomizationFlowNavigationText}>{previousText}</Text>}
          onPress={onPreviousCallback}
        />
      ) : (
        <></>
      )}
      {showNextButton ? (
        <ShineButton
          borderRadius={25}
          backgroundColor={'#B1CC4E'}
          underlayColor={'#93B141'}
          style={[styles.CustomizationFlowNavigationButton]}
          buttonContent={<Text style={styles.CustomizationFlowNavigationText}>{nextText}</Text>}
          onPress={onNextCallback}
        />
      ) : (
        <></>
      )}
    </LinearGradient>
  );
}
