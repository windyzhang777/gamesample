import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ProfileSelectionItem.stylesheet';
import profileImagePlaceholder from 'src/assets/images/ProfileSelectorImage.png';
import {LocalImage} from 'src/components/LocalImage';

export interface ProfileSelectionItemProps {
  displayName: string;
  profileId: string;
  selected: boolean;
  onPress: () => void;
  //Todo, profile image data?
}

export default function ProfileSelectionItem({
  displayName,
  selected,
  onPress,
}: ProfileSelectionItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.ProfileSelectionItem, selected ? styles.ProfileSelectionItemSelected : {}]}>
        <LocalImage
          style={styles.ProfileSelectionItemProfileImage}
          source={profileImagePlaceholder}
          resizeMode={'contain'}
        />
        <Text style={styles.ProfileSelectionItemDisplyName}>{displayName}</Text>
      </View>
    </TouchableOpacity>
  );
}
