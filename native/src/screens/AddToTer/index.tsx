import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './AddToTer.stylesheet';
import AddToTer from 'src/components/AddToTer';
import {useDispatch, useSelector} from 'react-redux';
import {addToTerAction} from '../../store/trick-or-treat/actions';
import {avatarSlice} from '../../store/avatar/reducer';
import {getAvatarAssets} from '../../store/avatar/actions';

const copy = {
  overviewText: 'Create a profile for children under 13 years old.',
  tipText: "Tip: Instead of using your child's legal name, come up with a fun and spooky username.",
  buttonText: 'Next',
};

function AddToTerScreen() {
  const dispatch = useDispatch();

  // In the future, there will be multiple avatars available - we need to pick a random one to store with the character initially (the only avatar right now is Frankenstein)
  const availAvatars = useSelector((state: any) => state.avatar);
  let randomAvatar: any;

  // if state has been updated with avatars from playfab, there will be an avatar array to get a random avatar from
  if (availAvatars.avatar) {
    randomAvatar = availAvatars.avatar[Math.floor(Math.random() * availAvatars.avatar.length)];
  }

  /* Pass random avatar to saga along with chosen username so we can save it in playfab for this new character */
  const addToterCallback = (name: string) => {
    addToTerAction({name: name, avatarAssets: randomAvatar}, dispatch);

    // save a random avatar when user attempts to create ToTer
    dispatch(avatarSlice.actions['setCurrentAvatarCustomizations'](randomAvatar));
  };

  useEffect(() => {
    // get all available avatars from playfab
    getAvatarAssets({}, dispatch);
  }, []);

  return (
    <View style={styles.AddToTerUsername}>
      <Text style={styles.text}>{copy.overviewText}</Text>
      <Text style={styles.text}>{copy.tipText}</Text>
      <AddToTer addToterCallback={addToterCallback} />
    </View>
  );
}

export default AddToTerScreen;
