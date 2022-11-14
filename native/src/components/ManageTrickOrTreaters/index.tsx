import React from 'react';
import ToTerList from 'src/components/ToTerList';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './ManageTrickOrTreaters.stylesheet';
import {ToterState} from '../../store/trick-or-treat/types';
import {useNavigation} from '@react-navigation/native';

export interface ManageTrickOrTreatersRenderProps {
  toterList: ToterState;
}

export default function ManageTrickOrTreaters({toterList}: ManageTrickOrTreatersRenderProps) {
  const navigation = useNavigation();
  if (toterList?.toterItems && toterList.toterItems.length > 0) {
    return (
      <View style={styles.ManageTrickOrTreaters}>
        <ToTerList toterList={toterList} />
      </View>
    );
  }
  return (
    <View style={styles.ManageTrickOrTreaters}>
      <Text style={styles.text}>Create profiles for your kids</Text>
      <Text style={styles.text}>
        Help your trick-or-treaters make their own spooky monster avatars -- and get ready for
        Halloween!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddToter')}>
        <Text style={styles.buttonText}>Set up Trick or Treaters</Text>
      </TouchableOpacity>
    </View>
  );
}
