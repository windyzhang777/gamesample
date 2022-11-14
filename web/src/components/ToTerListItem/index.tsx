import React from 'react';
import ToTerListItemShared, {ToTerListItemProps} from 'shared/containers/ToTerListItem';
import classes from './ToTerListItem.module.css';
import {Link} from 'react-router-dom';

/**
 * This is a web version of rendering
 * @param {ToTerListItemProps} props
 */
export default function ToTerListItem(props: ToTerListItemProps) {
  //This is just passing down the properties
  return (
    <ToTerListItemShared
      {...props}
      renderComponent={({toterItem}: ToTerListItemProps) => {
        // This is where the web rendering is happening
        // needUpdate: <Link to={link} onClick={closeDrawerCallback}> closeDrawerCallback should be local

        return (
          <div className={classes.ToTerListItem}>
            <Link to={`/EditToTer/${toterItem.toterId}`}>
              <div className={classes.ToterName}>{toterItem.toterName}</div>
              <div className={classes.Arrow}>{'>'}</div>
            </Link>
          </div>
        );
      }}
    />
  );
}
