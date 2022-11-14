import React, {useState} from 'react';
import ManageTrickOrTreatersShared, {
  ManageTrickOrTreatersProps,
  ManageTrickOrTreatersRenderProps,
} from 'shared/containers/screens/ManageTrickOrTreaters';
import ToTerList from '../../ToTerList';
import AddToTer from '../../AddToTer';
import {useSelector, useDispatch} from 'react-redux';
import {View} from 'react-native';
import styles from './ManageTrickOrTreaters.stylesheet';

/**
 * This is a native version of rendering
 * @param {ManageTrickOrTreatersProps} props
 */
export default function ManageTrickOrTreaters(props: ManageTrickOrTreatersProps) {
  return (
    <ManageTrickOrTreatersShared
      {...props}
      useSelector={useSelector}
      renderComponent={({
        toterList,
      }: ManageTrickOrTreatersProps & ManageTrickOrTreatersRenderProps) => {
        return (
          <View style={styles.ManageTrickOrTreaters}>
            <ToTerList toterList={toterList} />
            <AddToTer useDispatch={useDispatch} useState={useState} />
          </View>
        );
      }}
    />
  );
}
