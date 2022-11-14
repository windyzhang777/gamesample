import React from 'react';
import ToTerListItemShared, {ToTerListItemProps} from 'shared/containers/ToTerListItem';
import {Text, View} from 'react-native';
import styles from './ToTerListItem.stylesheet';
import {Link} from 'react-router-native';

/**
 * This is a native version of rendering
 * @param {ToTerListItemProps} props
 */
export default function ToTerListItem(props: ToTerListItemProps) {
  //This is just passing down the properties
  return (
    <ToTerListItemShared
      {...props}
      renderComponent={({toterItem}: ToTerListItemProps) => {
        // This is where the native rendering is happening
        return (
          <>
            <Link to={'/EditToTer/' + toterItem.toterId}>
              <View style={styles.ToTerListItemToTer}>
                <Text style={styles.ToTerListItemToTerName}>{toterItem.toterName}</Text>
                <Text style={styles.ToTerListItemArrow}>{'>'}</Text>
              </View>
            </Link>
          </>
        );
      }}
    />
  );
}
