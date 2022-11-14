import React from 'react';
import NavigationSystemShared, {
  NavigationSystemProps,
  NavigationSystemRenderProps,
} from 'shared/containers/NavigationSystem';
import classes from './NavigationSystem.module.css';
import NavigationDrawer from '../NavigationDrawer';
// import BackDrop from '../BackDrop';
import TopBar from '../TopBar';
import {BrowserRouter, Route} from 'react-router-dom';
import {
  NavigationSectionType,
  NavigationItemType,
  NavigationRoute,
} from 'shared/store/navigation-system/types';
import resolverWeb from '../../utils/resolveWeb';

/**
 * This is a web version of rendering
 * @param {NavigationSystemProps} props
 */
export default function NavigationSystem(props: NavigationSystemProps) {
  //This is just passing down the properties
  return (
    <NavigationSystemShared
      {...props}
      renderComponent={({
        login,
        navigationMenu,
        topBarTitle,
        drawerOpen,
        toggleDrawerCallback,
        closeDrawerCallback,
      }: NavigationSystemProps & NavigationSystemRenderProps) => {
        if (login) {
          return <input type="button" onClick={login} value="Login" />;
        }

        // This is where the web rendering is happening
        const routes = navigationMenu.sections.map((section: NavigationSectionType) => {
          return section.navigationItems.map((navigationItem: NavigationItemType) => {
            return (
              <Route
                exact
                path={navigationItem.linkTo}
                key={navigationItem.key}
                component={navigationItem.linkComponent.bind({
                  resolver: resolverWeb,
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
                  component={route.linkComponent.bind({resolver: resolverWeb})}
                />
              );
            })
          : [];
        return (
          <div className={classes.NavigationSystem}>
            <TopBar
              topBarTitle={topBarTitle}
              toggleDrawerCallback={toggleDrawerCallback}
              shareButtonCallback={() => {
                console.log('Share button click');
              }}
            />
            <BrowserRouter>
              <div className={classes.Routes}>
                {routes}
                {extraRoutes}
              </div>
              <NavigationDrawer
                closeDrawerCallback={closeDrawerCallback}
                toggleDrawerCallback={toggleDrawerCallback}
                sections={navigationMenu.sections}
                drawerOpen={drawerOpen}
              />
            </BrowserRouter>
          </div>
        );
      }}
    />
  );
}
