import React, {useRef} from 'react';
import NavigationSystemShared, {
  NavigationSystemProps,
  NavigationSystemRenderProps,
} from 'shared/containers/NavigationSystem';
import styles from './NavigationSystem.stylesheet';
import {View, Animated, Dimensions} from 'react-native';
import TopBar from '../TopBar';
import NavigationDrawer from '../NavigationDrawer';
import {NativeRouter, Route} from 'react-router-native';
import {
  NavigationSectionType,
  NavigationItemType,
  NavigationRoute,
} from 'shared/store/navigation-system/types';
import resolveNative from '../../utils/resolveNative';

/**
 * This is a native version of rendering
 * @param {NavigationSystemProps} props
 */
export default function NavigationSystem(props: NavigationSystemProps) {
  //Platform Specific Rendering Value
  const slidePosition = useRef(new Animated.Value(0)).current;
  return (
    <NavigationSystemShared
      {...props}
      renderComponent={({
        navigationMenu,
        drawerOpen,
        topBarTitle,
        toggleDrawerCallback,
      }: NavigationSystemProps & NavigationSystemRenderProps) => {
        //Need to set animated function
        const animatedSlideNavigationDrawer = () => {
          Animated.timing(slidePosition, {
            toValue: Dimensions.get('window').width * (!drawerOpen ? 1 : 0),
            duration: 500,
            useNativeDriver: false,
          }).start();
        };
        const routes = navigationMenu.sections.map((section: NavigationSectionType) => {
          return section.navigationItems.map((navigationItem: NavigationItemType) => {
            return (
              <Route
                exact
                path={navigationItem.linkTo}
                key={navigationItem.key}
                component={navigationItem.linkComponent.bind({
                  resolver: resolveNative,
                })}
              />
            );
          });
        });
        const extraRoutes = navigationMenu.extraRoutes
          ? navigationMenu.extraRoutes.map((route: NavigationRoute) => {
              return (
                <Route
                  exact
                  path={route.linkTo}
                  key={route.key}
                  component={route.linkComponent.bind({resolver: resolveNative})}
                />
              );
            })
          : [];
        return (
          <View style={styles.NavigationSystem}>
            <TopBar
              style={styles.NavigationSystemTopBar}
              toggleDrawerCallback={toggleDrawerCallback}
              drawerOpenCallback={() => {
                toggleDrawerCallback();
                animatedSlideNavigationDrawer();
              }}
              shareButtonCallback={() => console.log('Share Button Pressed')}
              topBarTitle={topBarTitle}
            />
            <NativeRouter>
              {routes}
              {extraRoutes}
              <NavigationDrawer
                sections={navigationMenu.sections}
                toggleDrawerCallback={() => {
                  toggleDrawerCallback();
                  animatedSlideNavigationDrawer();
                }}
                closeDrawerCallback={() => {
                  toggleDrawerCallback();
                  animatedSlideNavigationDrawer();
                }}
                style={[
                  styles.NavigationSystemDrawer,
                  {
                    transform: [
                      {
                        translateX: slidePosition,
                      },
                    ],
                  },
                ]}
              />
            </NativeRouter>
          </View>
        );
      }}
    />
  );
}
