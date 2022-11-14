import React from 'react';
import {default as TopBarShared, TopBarProps, TopBarRenderProps} from 'shared/containers/TopBar';
import classes from './TopBar.module.css';
import Button from '../Button';
import topBarDrawerIcon from 'native/src/assets/images/topBarDrawerIcon.png';
import topBarShareIcon from 'native/src/assets/images/topBarShareIcon.png';

/**
 * This is a web version of rendering
 * @param {TopBarProps} props
 */

export default function NavigationItem(props: TopBarProps) {
  //This is just passing down the properties

  return (
    <TopBarShared
      {...props}
      renderComponent={({toggleDrawerCallback, topBarTitle}: TopBarProps & TopBarRenderProps) => {
        // This is where the web rendering is happening

        return (
          <div
            className={classes.TopBar}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                toggleDrawerCallback();
              }
            }}>
            <Button btnColor="dark" clicked={toggleDrawerCallback}>
              <img src={topBarDrawerIcon} alt="topBarDrawerIcon" />
            </Button>
            <div className={classes.Title}>{topBarTitle}</div>
            <Button btnColor="dark">
              <img src={topBarShareIcon} alt="topBarShareIcon" />
            </Button>
          </div>
        );
      }}
    />
  );
}
