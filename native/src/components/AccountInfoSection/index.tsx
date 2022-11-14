import React from 'react';
import AccountInfoSectionShared, {
  AccountInfoSectionProps,
} from 'shared/containers/AccountInfoSection';
import {Text, View, Image} from 'react-native';
import styles from './AccountInfoSection.stylesheet';

/**
 * This is a native version of rendering
 * @param {AccountInfoSectionProps} props
 */
export default function AccountInfoSection(props: AccountInfoSectionProps) {
  //This is just passing down the properties
  return (
    <AccountInfoSectionShared
      {...props}
      renderComponent={({profileImageSource, username}: AccountInfoSectionProps) => {
        // This is where the native rendering is happening
        return (
          <View style={styles.AccountInfoSection}>
            <View style={styles.AccountInfoSectionProfileImageContainer}>
              <Image
                style={styles.AccountInfoSectionProfileImage}
                resizeMode={'contain'}
                source={profileImageSource}
              />
            </View>
            <Text style={styles.AccountInfoSectionUsername}>{username}</Text>
          </View>
        );
      }}
    />
  );
}
