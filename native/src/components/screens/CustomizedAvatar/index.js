import React from 'react';
import CustomizeAvatarShared, {
  CustomizeAvatarProps,
} from 'shared/containers/screens/CustomizeAvatar';
import {View} from 'react-native';
import CustomizeAvatar from '../../CustomizeAvatar';

export default function CustomizedAvatar(props: CustomizeAvatarProps) {
  return (
    <CustomizeAvatarShared
      {...props}
      // eslint-disable-next-line no-empty-pattern
      renderComponent={({}: CustomizeAvatarProps) => {
        return (
          <View
            style={{
              flex: 1,
              backgroundColor: '#4A5696',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomizeAvatar />
          </View>
        );
      }}
    />
  );
}
