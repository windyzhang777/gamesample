import React from 'react';
import NavigationDrawerShared, {NavigationDrawerProps} from 'shared/containers/NavigationDrawer';
import classes from './NavigationDrawer.module.css';
import NavigationSection from '../NavigationSection';
import AccountInfoSection from '../AccountInfoSection';
import demoProfileImage from 'native/src/assets/images/demoProfileImage.png';
import Button from '../Button';
import x_icon from 'native/src/assets/images/x_icon.png';

/**
 * This is a web version of rendering
 * @param {NavigationDrawerProps} props
 */

export default function NavigationDrawer(props: NavigationDrawerProps) {
  //This is just passing down the properties

  return (
    <NavigationDrawerShared
      {...props}
      renderComponent={({
        sections,
        closeDrawerCallback,
        toggleDrawerCallback,
        drawerOpen,
      }: NavigationDrawerProps) => {
        // This is where the web rendering is happening
        let toggleClasses = [classes.NavigationDrawer, classes.Close];
        if (drawerOpen) {
          toggleClasses = [classes.NavigationDrawer, classes.Open];
        }

        return (
          <div
            className={toggleClasses.join(' ')}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                closeDrawerCallback();
              }
            }}>
            <Button btnColor="light" clicked={closeDrawerCallback}>
              <img src={x_icon} alt="x_icon" />
            </Button>
            <div className={classes.NavContent}>
              <AccountInfoSection username={'G-MOM35'} profileImageSource={demoProfileImage} />
              <nav className={classes.Navs}>
                {sections.map((section) => {
                  return (
                    <div key={section.sectionText}>
                      <NavigationSection
                        key={section.sectionText}
                        navigationSection={section}
                        toggleDrawerCallback={toggleDrawerCallback}
                      />
                    </div>
                  );
                })}
              </nav>
            </div>
          </div>
        );
      }}
    />
  );
}
