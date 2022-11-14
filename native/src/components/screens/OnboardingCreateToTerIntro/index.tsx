import React from 'react';
import OnboardingCreateToTerShared, {
  OnboardingCreateToTerRenderProps,
} from 'shared/containers/screens/OnboardingCreateToTer';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './OnboardingCreateToTer.stylesheet';

const OnboardCreateToTerIntro = () => {
  return (
    <OnboardingCreateToTerShared
      renderComponent={({copy}: OnboardingCreateToTerRenderProps) => {
        return (
          <View style={styles.CreateToTer}>
            <Text style={styles.p}>{copy.overviewTitle1}</Text>
            <Text style={styles.p}>{copy.overviewTitle2}</Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'will eventually take user to Onboarding - Profile Selection screen (TBD upon  navigation method)',
                )
              }>
              <Text style={styles.button}>{copy.overviewSetUpButton}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Alert.alert('will eventually take user to Map screen (TBD upon  navigation method)')
              }>
              <Text style={styles.button}>{copy.overviewSkipButton}</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

export default OnboardCreateToTerIntro;
