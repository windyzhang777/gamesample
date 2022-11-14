import React from 'react';
import NavigationItemShared, {NavigationItemProps} from 'shared/containers/NavigationItem';
import classes from './NavigationItem.module.css';
import {Link} from 'react-router-dom';

/**
 * This is a web version of rendering
 * @param {NavigationItemProps} props
 */
export default function NavigationItem(props: NavigationItemProps) {
  //This is just passing down the properties
  return (
    <NavigationItemShared
      {...props}
      renderComponent={({navigationItem, toggleDrawerCallback}: NavigationItemProps) => {
        // This is where the web rendering is happening
        // needUpdate: <Link to={link} onClick={closeDrawerCallback}> closeDrawerCallback should be local

        return (
          <li className={classes.NavigationItem}>
            <Link to={navigationItem.linkTo} onClick={toggleDrawerCallback}>
              {navigationItem.menuText}
            </Link>
          </li>
        );
      }}
    />
  );
}
