import React from 'react';
import ProfileSelection from 'src/screens/ProfileSelection';
import {logout} from 'src/store/authentication/actions';
import {useSelector, useDispatch} from 'react-redux';
import {userSlice} from 'src/store/user/reducer';
import {RootState} from 'src/store';
import {useNavigation} from '@react-navigation/native';

export default function ConnectedProfileSelection() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const currentProfileId = useSelector((state: RootState) => state.user.selectedProfileId);
  const candyGiverProfile = useSelector((state: RootState) => {
    return {
      profileId: state.user.playfabId,
      profileDisplayName: state.user.displayName,
    };
  });
  const toterProfiles = useSelector((state: RootState) => {
    return state.toterList.toterItems.map((toter) => ({
      profileId: toter.toterId,
      profileDisplayName: toter.toterName,
    }));
  });
  const onSwitchProfile = (profileId) => {
    dispatch(
      userSlice.actions.switchUserProfile({
        profileId,
      }),
    );
  };
  const b2cId = useSelector((state: RootState) => state.user.b2cId);
  const onLogOut = () => {
    logout({b2cId}, dispatch);
  };

  const profileSelectionProps = {
    navigation,
    currentProfileId,
    candyGiverProfile,
    toterProfiles,
    onSwitchProfile,
    onLogOut,
  };

  return <ProfileSelection {...profileSelectionProps} />;
}
