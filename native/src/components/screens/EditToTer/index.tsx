/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import EditToTerShared, {
  EditToTerProps,
  EditToTerRenderProps,
} from 'shared/containers/screens/EditToTer';
import {View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

export default function EditToTer(props: EditToTerProps) {
  return (
    <EditToTerShared
      {...props}
      useSelector={useSelector}
      renderComponent={({toter, goBackCallback}: EditToTerRenderProps) => {
        return (
          <View>
            <Button title={'<'} onPress={goBackCallback} />
            <Text>ToTerName: {toter.toterName}</Text>
            <Text>ToTerId: {toter.toterId}</Text>
          </View>
        );
      }}
    />
  );
}
