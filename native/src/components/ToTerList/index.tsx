import React from 'react';
import {Button, FlatList} from 'react-native';
import ToTerListItem from './ToterListItem';
import {ToterState, ToTerType} from 'src/store/trick-or-treat/types';
import styles from './ToTerList.stylesheet';
import {useNavigation} from '@react-navigation/native';

export interface ToTerListProps {
  toterList: ToterState;
}
export default function ToTerList({toterList}: ToTerListProps) {
  const navigation = useNavigation();
  return (
    <>
      <FlatList
        style={styles.ToTerList}
        data={toterList.toterItems}
        renderItem={({item}) => <ToTerListItem toterItem={item} />}
        keyExtractor={(item: ToTerType) => item.toterId}
      />
      <Button title={'ADD A TRICK OR TREATER'} onPress={() => navigation.navigate('AddToter')} />
    </>
  );
}
