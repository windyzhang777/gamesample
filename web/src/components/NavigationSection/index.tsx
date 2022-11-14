import React from 'react';
import NavigationSectionShared, {NavigationSectionProps} from 'shared/containers/NavigationSection';
import NavigationItem from '../NavigationItem';
import classes from './NavigationSection.module.css';

/**
 * This is a web version of rendering
 * @param {NavigationSectionProps} props
 */
export default function NavigationSection(props: NavigationSectionProps) {
  //This is just passing down the properties
  return (
    <NavigationSectionShared
      {...props}
      renderComponent={({navigationSection, toggleDrawerCallback}: NavigationSectionProps) => {
        // This is where the web rendering is happening
        return (
          <div className={classes.navigationSection}>
            {navigationSection.navigationItems.map((item) => {
              return (
                <NavigationItem
                  key={item.key}
                  navigationItem={item}
                  toggleDrawerCallback={toggleDrawerCallback}
                />
              );
            })}
          </div>
        );
      }}
    />
  );
}
