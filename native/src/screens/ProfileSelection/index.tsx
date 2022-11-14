import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import styles from './ProfileSelection.stylesheet';
import ProfileSelectionItem from 'src/components/ProfileSelectionItem';
import {NavigationProp, NavigationState} from '@react-navigation/native';

interface Profile {
  profileId: string;
  profileDisplayName: string;
}

export interface ProfileSelectionProps {
  navigation: NavigationProp<Record<string, object>, string, NavigationState, {}, {}>;
  currentProfileId: string;
  candyGiverProfile: Profile;
  toterProfiles: Profile[];
  onSwitchProfile: (profileId: string) => void;
  onLogOut: () => void;
}

export default function ProfileSelection({
  navigation,
  currentProfileId,
  candyGiverProfile,
  toterProfiles,
  onSwitchProfile,
  onLogOut,
}: ProfileSelectionProps) {
  return (
    <View style={styles.ProfileSeleciton}>
      <Text //TODO: need asset
        style={{
          position: 'absolute',
          top: 32,
          fontSize: 32,
        }}
        onPress={() => navigation.goBack()}>
        X
      </Text>
      <Text style={styles.ProfileSelecitonHeading}>Switch Profiles</Text>
      <FlatList
        data={[candyGiverProfile, ...toterProfiles]}
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        keyExtractor={(item) => item.profileId}
        renderItem={({item}) => (
          <ProfileSelectionItem
            selected={currentProfileId === item.profileId}
            profileId={item.profileId}
            displayName={item.profileDisplayName}
            onPress={onSwitchProfile.bind(null, item.profileId)}
          />
        )}
      />
      <TouchableOpacity onPress={onLogOut} style={styles.ProfileSelecitonLogoutButton}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}
