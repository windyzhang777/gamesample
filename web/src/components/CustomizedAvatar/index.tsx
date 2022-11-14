import React from 'react';
import CustomizedAvatarShared, {
  CustomizedAvatarRenderProps,
  SelectedCustomizedAvatarRenderProps,
} from 'shared/containers/CustomizedAvatar';
import {useSelector} from 'react-redux';
import GrayscaleAvatar from './GrayscaleAvatar';
import ColorOverlayAvatar from './ColorOverlayAvatar';
import classes from './CustomizedAvatar.module.css';

// The Render Component will take all the shared props/state from a shared component and use that to render in
// the platform specific way.  There should not be any logic here.  This will be view only.
const CustomizedAvatarRenderComponent = ({
  currentAvatarCustomizations,
  monsterMaskWeb,
  monsterImage,
  monsterDetailsImage,
  eyeImage,
  headImage,
  noseImage,
  mouthImage,
  monsterClothesOneImage,
  monsterClothesTwoImage,
  monsterClothesOneMaskWeb,
  monsterClothesTwoMaskWeb,
  skinColor,
  clothesOneColor,
  clothesTwoColor,
}: CustomizedAvatarRenderProps & SelectedCustomizedAvatarRenderProps) => {
  if (!currentAvatarCustomizations.avatar) {
    return <p>No avatar</p>;
  }

  if (!currentAvatarCustomizations.avatar) {
    return <p>No avatar [{currentAvatarCustomizations.avatar}] not found in avatar.</p>;
  }

  return (
    <div className={classes.AvatarElement}>
      {/* (This needs to be z-index: 12 AND mix-blend-mode: normal) */}
      <GrayscaleAvatar
        image={monsterDetailsImage}
        alt="monsterDetails"
        style={{zIndex: '12', mixBlendMode: 'normal'}}
      />
      {/* (This needs to be z-index: 11) */}
      <GrayscaleAvatar image={monsterImage} alt="monsterImage" style={{zIndex: '11'}} />
      {/* (This needs to be z-index: 10) */}
      <ColorOverlayAvatar
        imageMaskWeb={monsterMaskWeb}
        selectedColor={skinColor}
        style={{zIndex: '10'}}
      />

      {/* (This asset needs to be z-index: 21) */}
      <GrayscaleAvatar
        image={monsterClothesOneImage}
        alt="monsterClothesOne"
        style={{zIndex: '21'}}
      />
      {/* (This asset needs to be z-index: 20) */}
      <ColorOverlayAvatar
        imageMaskWeb={monsterClothesOneMaskWeb}
        selectedColor={clothesOneColor}
        style={{zIndex: '20'}}
      />

      {/* (This asset needs to be z-index: 21) */}
      <GrayscaleAvatar
        image={monsterClothesTwoImage}
        alt="monsterClothesTwo"
        style={{zIndex: '21'}}
      />
      {/* (This asset needs to be z-index: 20) */}
      <ColorOverlayAvatar
        imageMaskWeb={monsterClothesTwoMaskWeb}
        selectedColor={clothesTwoColor}
        style={{zIndex: '20'}}
      />

      {/* (All Detail elements should be z-index: 30 and mix-blend-mode: normal) */}
      <GrayscaleAvatar image={eyeImage} alt="eyes" style={{zIndex: '30', mixBlendMode: 'normal'}} />
      <GrayscaleAvatar
        image={headImage}
        alt="head"
        style={{zIndex: '30', mixBlendMode: 'normal'}}
      />
      <GrayscaleAvatar
        image={noseImage}
        alt="nose"
        style={{zIndex: '30', mixBlendMode: 'normal'}}
      />
      <GrayscaleAvatar
        image={mouthImage}
        alt="mouth"
        style={{zIndex: '30', mixBlendMode: 'normal'}}
      />
    </div>
  );
};

// This would be the component that could be used / shared within the web project
const CustomizedAvatar = () => (
  <CustomizedAvatarShared
    renderComponent={CustomizedAvatarRenderComponent}
    useSelector={useSelector}
  />
);

export default CustomizedAvatar;
