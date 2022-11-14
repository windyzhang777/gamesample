import React from 'react';
import NotificationIconShared, {NotificationIconProps} from 'shared/containers/NotificationIcon';
import {Text} from 'react-native';

/**
 * This is a native version of rendering
 * @param {NotificationIconProps} props
 */
export default function NotificationIcon(props: NotificationIconProps) {
  //This is just passing down the properties
  return (
    <NotificationIconShared
      {...props}
      renderComponent={({notificationNumber}: NotificationIconProps) => {
        // This is where the native rendering is happening
        return <Text>{notificationNumber}</Text>;
      }}
    />
  );
}
