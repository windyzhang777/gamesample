import {useDispatch, useSelector} from 'react-redux';
import React from 'react';
import {avatarSlice} from 'src/store/avatar/reducer';
import EditYourAvatarFinalFlow from 'src/components/EditYourAvatarFinalFlow';

export interface ConnectedEditYourAvatarFinalFlowProps {
  useCurrentIndex: [any, any];
}

export default function ConnectedEditYourAvatarFinalFlow({
  useCurrentIndex,
}: ConnectedEditYourAvatarFinalFlowProps) {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useCurrentIndex;

  const handleShare = () => {
    console.log('TODO: handleShare');
  };
  const handleEditYourAvatar = () => {
    dispatch(avatarSlice.actions.resetSaved());
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    console.log('TODO: handleNext');
  };

  return (
    <EditYourAvatarFinalFlow
      handleShare={handleShare}
      handleEditYourAvatar={handleEditYourAvatar}
      handleNext={handleNext}
    />
  );
}
