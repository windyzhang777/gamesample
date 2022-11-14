import React from 'react';
import ToTerListShared, {ToTerListProps} from 'shared/containers/ToTerList';
import ToTerListItem from '../ToTerListItem';
import classes from './ToTerList.module.css';

/**
 * This is a web version of rendering
 * @param {ToTerListProps} props
 */
export default function ToTerList(props: ToTerListProps) {
  //This is just passing down the properties
  return (
    <ToTerListShared
      {...props}
      renderComponent={({toterList}: ToTerListProps) => {
        //Might need to see if react-virtualized is needed for long list on web.
        return (
          <div className={classes.ToTerList}>
            {toterList.toterItems.map((item) => {
              return <ToTerListItem key={item.toterId} toterItem={item} />;
            })}
          </div>
        );
      }}
    />
  );
}
