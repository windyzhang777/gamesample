import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import AddToterShared, {AddToterProps, AddToterRenderProps} from 'shared/containers/AddToter';
import styles from './AddToTer.stylesheet';

export default function AddToTer(props: AddToterProps) {
  return (
    <AddToterShared
      {...props}
      renderComponent={({
        username,
        changeToterNameCallback,
        addToterCallback,
      }: AddToterProps & AddToterRenderProps) => {
        return (
          <View style={styles.AddToTer}>
            <View style={styles.AddToTerIOContainer}>
              <Text style={styles.AddToTerText}>Trick or Treater Name</Text>
              <TextInput
                style={styles.AddToTerInput}
                onChangeText={changeToterNameCallback}
                value={username}
              />
            </View>
            <TouchableOpacity onPress={() => addToterCallback(username)}>
              <Text style={styles.AddToTerButton}>Add a new ToTer</Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
}
