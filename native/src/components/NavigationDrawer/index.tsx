import React from 'react';
import NavigationDrawerShared, {NavigationDrawerProps} from 'shared/containers/NavigationDrawer';
import styles from './NavigationDrawer.stylesheet';
import NavigationSection from '../NavigationSection';
import AccountInfoSection from '../AccountInfoSection';
import {Animated} from 'react-native';
import TouchableImage from '../native/TouchableImage';

const demoProfileImage = require('../../assets/images/demoProfileImage.png');
/**
 * This is a native version of rendering
 * @param {NavigationDrawerProps} props
 */
export default function NavigationItem(props: NavigationDrawerProps) {
  //This is just passing down the properties
  const navigationDrawerStyles = [styles.NavigationDrawer, props.style ? props.style.flat() : {}];
  return (
    <NavigationDrawerShared
      {...props}
      renderComponent={({
        sections,
        toggleDrawerCallback,
        closeDrawerCallback,
      }: NavigationDrawerProps) => {
        // This is where the native rendering is happening
        return (
          <Animated.ScrollView style={navigationDrawerStyles}>
            <TouchableImage
              source={require('../../assets/images/x_icon.png')}
              style={styles.NavigationDrawerClose}
              onPress={closeDrawerCallback}
            />
            <AccountInfoSection username={'G-MOM35'} profileImageSource={demoProfileImage} />
            {sections.map((section) => {
              return (
                <NavigationSection
                  toggleDrawerCallback={toggleDrawerCallback}
                  key={section.sectionKey}
                  navigationSection={section}
                />
              );
            })}
          </Animated.ScrollView>
        );
      }}
    />
  );
}
