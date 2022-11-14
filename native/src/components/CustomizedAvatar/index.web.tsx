import React from 'react';
import classes from './CustomizedAvatar.module.css';
import {CustomizedAvatarProps} from 'src/components/CustomizedAvatar/props';

// --- Props ---
export interface GrayscaleProps {
  // Source of the grayscale avatar image
  image: string;
  alt: string;
  // any styling regards to zIndex or additional properties
  style?: Record<string, string>;
}

export interface ColorOverlayProps {
  // The color layer mask image
  imageMaskWeb: string;
  // user selected color to set background
  selectedColor: string;
  style?: Record<string, string>;
}

// --- Web Only Helper Components ---
function GrayscaleAvatar({image, alt, style}: GrayscaleProps) {
  return <img className={classes.BaseAvatar} style={{...style}} src={image} alt={alt} />;
}

// The solid piece we can color for the door
function ColorOverlayAvatar({imageMaskWeb, selectedColor, style}: ColorOverlayProps) {
  return (
    <div
      className={classes.ColorMask}
      style={{
        background: `${selectedColor}`,
        WebkitMaskImage: `url(${imageMaskWeb})`,
        maskImage: `url(${imageMaskWeb})`,
        ...style,
      }}
    />
  );
}

// --- CustomizedAvatar Component ---
const CustomizedAvatar = ({
  currentAvatarCustomizations,
  avatarMaskWeb,
  avatarImage,
  avatarDetailsImage,
  eyeImage,
  headImage,
  noseImage,
  mouthImage,
  costumeFrontImage,
  costumeBackImage,
  avatarClothesOneImage,
  avatarClothesTwoImage,
  avatarClothesOneMaskWeb,
  avatarClothesTwoMaskWeb,
  skinColor,
  clothesOneColor,
  clothesTwoColor,
}: CustomizedAvatarProps) => {
  if (!currentAvatarCustomizations.avatar) {
    return <p>No avatar</p>;
  }

  if (!currentAvatarCustomizations.avatar) {
    return <p>No avatar [{currentAvatarCustomizations.avatar}] not found in avatar.</p>;
  }

  return (
    <div className={classes.AvatarElement}>
      <GrayscaleAvatar
        image={costumeBackImage}
        alt="CostumeBack"
        style={{zIndex: '9', mixBlendMode: 'normal'}}
      />
      {/* (This needs to be z-index: 12 AND mix-blend-mode: normal) */}
      <GrayscaleAvatar
        image={avatarDetailsImage}
        alt="avatarDetails"
        style={{zIndex: '12', mixBlendMode: 'normal'}}
      />
      {/* (This needs to be z-index: 11) */}
      <GrayscaleAvatar image={avatarImage} alt="avatarImage" style={{zIndex: '11'}} />
      {/* (This needs to be z-index: 10) */}
      <ColorOverlayAvatar
        imageMaskWeb={avatarMaskWeb}
        selectedColor={skinColor}
        style={{zIndex: '10'}}
      />

      {/* (This asset needs to be z-index: 21) */}
      <GrayscaleAvatar
        image={avatarClothesOneImage}
        alt="avatarClothesOne"
        style={{zIndex: '21'}}
      />
      {/* (This asset needs to be z-index: 20) */}
      <ColorOverlayAvatar
        imageMaskWeb={avatarClothesOneMaskWeb}
        selectedColor={clothesOneColor}
        style={{zIndex: '20'}}
      />

      {/* (This asset needs to be z-index: 21) */}
      <GrayscaleAvatar
        image={avatarClothesTwoImage}
        alt="avatarClothesTwo"
        style={{zIndex: '21'}}
      />
      {/* (This asset needs to be z-index: 20) */}
      <ColorOverlayAvatar
        imageMaskWeb={avatarClothesTwoMaskWeb}
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
      <GrayscaleAvatar
        image={costumeFrontImage}
        alt="CostumeFront"
        style={{zIndex: '40', mixBlendMode: 'normal'}}
      />
    </div>
  );
};

export default CustomizedAvatar;
