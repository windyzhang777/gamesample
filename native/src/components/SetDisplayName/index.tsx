import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {TextInput, Button, Text} from 'react-native';
// import {DisplayNameSubmit} from 'shared/store/authentication/actions';
import SetDisplayNameShared, {SetDisplayNameProps} from 'shared/containers/SetDisplayName';

const SetDisplayName = () => {
  const [displayNameState, setDisplayNameState] = useState('');

  return (
    <SetDisplayNameShared
      useDispatch={useDispatch}
      useSelector={useSelector}
      renderComponent={({handleSubmit}: SetDisplayNameProps) => {
        const handleSubmitClick = () => {
          handleSubmit(displayNameState);
        };
        return (
          <>
            <Text>Add a Display Name</Text>
            <TextInput
              onChangeText={(text) => setDisplayNameState(text)}
              value={displayNameState}
            />
            <Button onPress={handleSubmitClick} title="Submit" />
          </>
        );
      }}
    />
  );
};

export default SetDisplayName;
