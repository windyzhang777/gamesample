import * as React from 'react';
import {
  currentAvatarCustomizationsSelector,
  selectedEyeSelector,
  selectedHeadSelector,
  selectedMonsterSelector,
  selectedMouthSelector,
  selectedNoseSelector,
} from '../../store/avatar/selectors';
import {contentSelector} from '../../store/content/selectors';

export interface SelectedCustomizedAvatarProps {
  renderComponent: React.FC<any>;
  useSelector?: any;
}

export interface SelectedCustomizedAvatarRenderComponentProps {
  selectedEyeImage: string;
  selectedHeadImage: string;
  selectedNoseImage: string;
  selectedMouthImage: string;
  selectedAvatar: string;
  selectedMonsterImage: string;
  selectedMonsterDetailsImage: string;
  selectedMonsterMaskWeb: string;
  selectedMonsterMaskNative: string;
  selectedMonsterClothesOneImage: string;
  selectedMonsterClothesTwoImage: string;
  selectedMonsterClothesOneMaskWeb: string;
  selectedMonsterClothesOneMaskNative: string;
  selectedMonsterClothesTwoMaskWeb: string;
  selectedMonsterClothesTwoMaskNative: string;
  selectedSkinColor: string;
  selectedClothesOneColor: string;
  selectedClothesTwoColor: string;
}

const SelectedCustomizedAvatar = ({
  renderComponent,
  useSelector,
}: SelectedCustomizedAvatarProps) => {
  const currentAvatarCustomizations = useSelector(currentAvatarCustomizationsSelector);
  const {
    selectedSkinColor,
    selectedClothesOneColor,
    selectedClothesTwoColor,
  } = currentAvatarCustomizations;
  const contentState = useSelector(contentSelector);
  const selectedAvatar = useSelector(selectedMonsterSelector);
  const selectedHead = useSelector(selectedHeadSelector);
  const selectedEye = useSelector(selectedEyeSelector);
  const selectedNose = useSelector(selectedNoseSelector);
  const selectedMouth = useSelector(selectedMouthSelector);
  const selectedEyeImage = selectedEye ? contentState[selectedEye.image] : '';
  const selectedMonsterImage = selectedAvatar ? contentState[selectedAvatar.monsterImage] : '';
  const selectedMonsterDetailsImage = selectedAvatar
    ? contentState[selectedAvatar.monsterDetailsImage]
    : '';
  const selectedMonsterMaskWeb = selectedAvatar
    ? contentState[selectedAvatar.monsterImageMaskWeb]
    : '';
  const selectedMonsterMaskNative = selectedAvatar
    ? contentState[selectedAvatar.monsterImageMaskNative]
    : '';
  const selectedMonsterClothesOneImage = selectedAvatar
    ? contentState[selectedAvatar.clothesOneImage]
    : '';
  const selectedMonsterClothesTwoImage = selectedAvatar
    ? contentState[selectedAvatar.clothesTwoImage]
    : '';
  const selectedMonsterClothesOneMaskWeb = selectedAvatar
    ? contentState[selectedAvatar.clothesOneMaskWeb]
    : '';
  const selectedMonsterClothesOneMaskNative = selectedAvatar
    ? contentState[selectedAvatar.clothesOneMaskNative]
    : '';
  const selectedMonsterClothesTwoMaskWeb = selectedAvatar
    ? contentState[selectedAvatar.clothesTwoMaskWeb]
    : '';
  const selectedMonsterClothesTwoMaskNative = selectedAvatar
    ? contentState[selectedAvatar.clothesTwoMaskNative]
    : '';
  const selectedHeadImage = selectedHead ? contentState[selectedHead.image] : '';
  const selectedNoseImage = selectedNose ? contentState[selectedNose.image] : '';
  const selectedMouthImage = selectedMouth ? contentState[selectedMouth.image] : '';
  const renderProps: SelectedCustomizedAvatarRenderComponentProps = {
    selectedEyeImage,
    selectedHeadImage,
    selectedNoseImage,
    selectedMouthImage,
    selectedAvatar,
    selectedMonsterImage,
    selectedMonsterDetailsImage,
    selectedMonsterMaskWeb,
    selectedMonsterMaskNative,
    selectedMonsterClothesOneImage,
    selectedMonsterClothesTwoImage,
    selectedMonsterClothesOneMaskWeb,
    selectedMonsterClothesOneMaskNative,
    selectedMonsterClothesTwoMaskWeb,
    selectedMonsterClothesTwoMaskNative,
    selectedSkinColor,
    selectedClothesOneColor,
    selectedClothesTwoColor,
  };
  return renderComponent(renderProps);
};

export default SelectedCustomizedAvatar;
