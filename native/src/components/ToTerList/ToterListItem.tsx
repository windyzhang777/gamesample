import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './ToTerListItem.stylesheet';
import {ToTerType} from '../../store/trick-or-treat/types';
import {useNavigation} from '@react-navigation/native';

export interface ToTerListItemProps {
  toterItem: ToTerType;
}

const ToTerListItem = ({toterItem}: ToTerListItemProps) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('EditToter', {toterId: toterItem.toterId})}>
      <View style={styles.ToTerListItemToTer}>
        <Text style={styles.ToTerListItemToTerName}>{toterItem.toterName}</Text>
        <Text style={styles.ToTerListItemArrow}>{'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToTerListItem;
