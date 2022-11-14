import React, {useState} from 'react';
import ManageTrickOrTreatersShared, {
  ManageTrickOrTreatersProps,
  ManageTrickOrTreatersRenderProps,
} from 'shared/containers/screens/ManageTrickOrTreaters';
import classes from './ManageTrickOrTreaters.module.css';
import ToTerList from '../../ToTerList';
import AddToTer from '../../AddToTer';
import {useSelector, useDispatch} from 'react-redux';

/**
 * This is a native version of rendering
 * @param {ManageTrickOrTreatersProps} props
 */
export default function ManageTrickOrTreaters(props: ManageTrickOrTreatersProps) {
  return (
    <ManageTrickOrTreatersShared
      {...props}
      useSelector={useSelector}
      renderComponent={({toterList}: ManageTrickOrTreatersRenderProps) => {
        return (
          <div className={classes.ManageTrickOrTreaters}>
            <ToTerList toterList={toterList} />
            <AddToTer useDispatch={useDispatch} useState={useState} />
          </div>
        );
      }}
    />
  );
}
