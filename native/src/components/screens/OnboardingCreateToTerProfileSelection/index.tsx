import React from 'react';
import OnboardingCreateToTerShared, {
  OnboardingCreateToTerRenderProps,
} from 'shared/containers/screens/OnboardingCreateToTer';
import {View, Text, Alert, TouchableOpacity} from 'react-native';
import styles from './OnboardingCreateToTer.stylesheet';

const OnboardCreateToTerProfileSelection = () => {
  return (
    <OnboardingCreateToTerShared
      renderComponent={({copy}: OnboardingCreateToTerRenderProps) => {
        return (
          <View style={styles.CreateToTer}>
            <Text style={styles.p}>{copy.addChildTitle}</Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'will eventually take user to ToTer creation flow (TBD upon  navigation method)',
                )
              }>
              <Text style={styles.button}>{copy.addChildUnder13Button}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default OnboardCreateToTerProfileSelection;
