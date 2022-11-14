import React from 'react';
import NavigationItemShared, {NavigationItemProps} from 'shared/containers/NavigationItem';
import {Text, View} from 'react-native';
import styles from './NavigationItem.stylesheet';
import {Link} from 'react-router-native';

/**
 * This is a native version of rendering
 * @param {NavigationItemProps} props
 */
export default function NavigationItem(props: NavigationItemProps) {
  //This is just passing down the properties
  return (
    <NavigationItemShared
      {...props}
      renderComponent={({navigationItem, toggleDrawerCallback}: NavigationItemProps) => {
        // This is where the native rendering is happening
        return (
          <>
            <Link
              to={
                navigationItem.linkTo
                  ? navigationItem.linkTo
                  : (() => {
                      console.warn(
                        'NavigationItem(' +
                          navigationItem.menuText +
                          "): no linkTo provided, default to '/'",
                      );
                      return '/';
                    })()
              }
              onPress={() => {
                toggleDrawerCallback !== undefined
                  ? toggleDrawerCallback()
                  : (() => {
                      console.log('Link Pressed but no toggle callback');
                    })();
              }}>
              <Text style={styles.NavigationItemText}>
                {navigationItem.icon ? navigationItem.icon : ''} {navigationItem.menuText}
              </Text>
            </Link>
            {navigationItem.removeBottomUnderline ? (
              <></>
            ) : (
              <View style={styles.NavigationItemTextUnderline} />
            )}
          </>
        );
      }}
    />
  );
}
