import React from 'react';
import NavigationSectionShared, {NavigationSectionProps} from 'shared/containers/NavigationSection';
import {View} from 'react-native';
import NavigationItem from '../NavigationItem';
import styles from './NavigationSection.stylesheet';

/**
 * This is a native version of rendering
 * @param {NavigationSectionProps} props
 */
export default function NavigationSection(props: NavigationSectionProps) {
  //This is just passing down the properties
  return (
    <NavigationSectionShared
      {...props}
      renderComponent={({navigationSection, toggleDrawerCallback}: NavigationSectionProps) => {
        // This is where the native rendering is happening
        return (
          <>
            {navigationSection.navigationItems.map((item) => {
              return (
                <NavigationItem
                  toggleDrawerCallback={toggleDrawerCallback}
                  key={item.key}
                  navigationItem={item}
                />
              );
            })}
            {navigationSection.removeBottomUnderline ? (
              <></>
            ) : (
              <View style={styles.NavigationSectionUnderline} />
            )}
          </>
        );
      }}
    />
  );
}
