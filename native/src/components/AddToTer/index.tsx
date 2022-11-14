import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from './AddToTer.stylesheet';
import {useNavigation} from '@react-navigation/native';

export interface AddToterProps {
  addToterCallback: (name: string) => void;
}

export default function AddToTer({addToterCallback}: AddToterProps) {
  const [username, setUsername] = useState<string>('');

  const navigation = useNavigation();

  return (
    <View style={styles.AddToTer}>
      <View style={styles.AddToTerIOContainer}>
        <TextInput style={styles.AddToTerInput} onChangeText={setUsername} value={username} />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (username.length > 0) {
            addToterCallback(username);
            navigation.goBack();
          } else {
            Alert.alert('please enter a username');
          }
        }}>
        <Text style={styles.AddToTerButton}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
