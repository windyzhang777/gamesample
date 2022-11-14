import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import EditYourAvatar from 'src/components/EditYourAvatar';
import {
  avatarsCustomizationFlowSelector,
  currentAvatarCustomizationsSelector,
  avatarIsSavingSelector,
  avatarIsSavedSelector,
} from 'src/store/avatar/selectors';
import {AvatarCustomizations, avatarSlice} from 'src/store/avatar/reducer';
import {getAvatarsConfigurationFlowAndAssets, saveAvatar} from 'src/store/avatar/actions';
import {contentSelector} from 'src/store/content/selectors';
import {RootStoreState} from 'src/models/RootStoreState';

export default function ConnectedEditYourAvatar() {
  const dispatch = useDispatch();
  const avatarsCustomizationFlowConfig = useSelector(avatarsCustomizationFlowSelector);
  const isSaving = useSelector(avatarIsSavingSelector);
  const isSaved = useSelector(avatarIsSavedSelector);
  const useCurrentAvatarCustomizationConfig = [
    useSelector(currentAvatarCustomizationsSelector),
    (payload: AvatarCustomizations): void => {
      dispatch(avatarSlice.actions.setCurrentAvatarCustomizations(payload));
    },
  ];
  const triggerFlowEndCallback = () => {
    saveAvatar({savedAvatar: JSON.stringify(useCurrentAvatarCustomizationConfig[0])}, dispatch);
  };

  useEffect(() => {
    getAvatarsConfigurationFlowAndAssets({}, dispatch);
  }, []);
  const content = useSelector<RootStoreState, {[key: string]: string}>(contentSelector);

  return (
    <EditYourAvatar
      isSaving={isSaving}
      isSaved={isSaved}
      avatarsCustomizationFlowConfig={avatarsCustomizationFlowConfig}
      useCurrentAvatarCustomizationConfig={useCurrentAvatarCustomizationConfig}
      triggerFlowEndCallback={triggerFlowEndCallback}
      content={content}
    />
  );
}
