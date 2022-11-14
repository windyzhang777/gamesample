import React from 'react';
import {View, Text} from 'react-native';
import styles from './EditToTer.stylesheet';
import {ToTerType} from 'src/store/trick-or-treat/types';
import {useSelector} from 'react-redux';

export default function EditToTer({route}) {
  const toter = useSelector((state: any) =>
    state.toterList.toterItems.find((toter: ToTerType) => toter.toterId === route.params.toterId),
  );

  return (
    <View style={styles.EditToTer}>
      <Text style={styles.text}>ToTerName: {toter.toterName}</Text>
      <Text style={styles.text}>ToTerId: {toter.toterId}</Text>
    </View>
  );
}
