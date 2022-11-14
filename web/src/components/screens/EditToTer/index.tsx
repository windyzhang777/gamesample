import React from 'react';
import EditToTerShared, {
  EditToTerProps,
  EditToTerRenderProps,
} from 'shared/containers/screens/EditToTer';
import classes from './EditToTer.module.css';
import {useSelector} from 'react-redux';

export default function EditToTer(props: EditToTerProps) {
  return (
    <EditToTerShared
      {...props}
      useSelector={useSelector}
      renderComponent={({toter, goBackCallback}: EditToTerRenderProps) => {
        return (
          <div className={classes.EditToTer}>
            <button onClick={goBackCallback}>{'<'}</button>
            <div>{toter.toterName}</div>
          </div>
        );
      }}
    />
  );
}
