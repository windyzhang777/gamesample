import React from 'react';
import ToTerListShared, {ToTerListProps} from 'shared/containers/ToTerList';
import {FlatList} from 'react-native';
import ToTerListItem from '../ToTerListItem';
import {ToTerType} from 'shared/store/trick-or-treat/types';
import styles from './ToTerList.stylesheet';

/**
 * This is a native version of rendering
 * @param {ToTerListProps} props
 */
export default function ToTerList(props: ToTerListProps) {
  //This is just passing down the properties
  return (
    <ToTerListShared
      {...props}
      renderComponent={({toterList}: ToTerListProps) => {
        // This is where the native rendering is happening
        return (
          <FlatList
            style={styles.ToTerList}
            data={toterList.toterItems}
            renderItem={({item}) => <ToTerListItem toterItem={item} />}
            keyExtractor={(item: ToTerType) => item.toterId}
          />
        );
      }}
    />
  );
}
