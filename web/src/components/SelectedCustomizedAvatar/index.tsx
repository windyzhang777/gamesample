import React from 'react';
import SelectedCustomizedAvatarShared, {
  SelectedCustomizedAvatarRenderComponentProps,
} from 'shared/containers/SelectedCustomizedAvatar';
import GrayScaleAsset from './GrayScaleAsset';
import ColorOverlay from './ColorOverlay';
import {useSelector} from 'react-redux';

const SelectedCustomizedAvatarRenderComponent = ({
  selectedAvatar,
  selectedMonsterMaskWeb,
  selectedMonsterImage,
  selectedMonsterDetailsImage,
  selectedEyeImage,
  selectedHeadImage,
  selectedNoseImage,
  selectedMouthImage,
  selectedMonsterClothesOneImage,
  selectedMonsterClothesTwoImage,
  selectedMonsterClothesOneMaskWeb,
  selectedMonsterClothesTwoMaskWeb,
  selectedSkinColor,
  selectedClothesOneColor,
  selectedClothesTwoColor,
}: SelectedCustomizedAvatarRenderComponentProps) => {
  // console.log('selectedAvatar: ' + selectedAvatar);
  return (
    <>
      {selectedAvatar ? (
        <>
          {/* (This needs to be z-index: 12 AND mix-blend-mode: normal) */}
          <GrayScaleAsset
            image={selectedMonsterDetailsImage}
            alt="monsterDetails"
            style={{zIndex: '12', mixBlendMode: 'normal'}}
          />
          {/* (This needs to be z-index: 11) */}
          <GrayScaleAsset image={selectedMonsterImage} alt="monsterImage" style={{zIndex: '11'}} />
          {/* (This needs to be z-index: 10) */}
          <ColorOverlay
            assetImageMaskWeb={selectedMonsterMaskWeb}
            selectedColor={selectedSkinColor}
            style={{zIndex: '10'}}
          />

          {/* (This asset needs to be z-index: 21) */}
          <GrayScaleAsset
            image={selectedMonsterClothesOneImage}
            alt="monsterClothesOne"
            style={{zIndex: '21'}}
          />
          {/* (This asset needs to be z-index: 20) */}
          <ColorOverlay
            assetImageMaskWeb={selectedMonsterClothesOneMaskWeb}
            selectedColor={selectedClothesOneColor}
            style={{zIndex: '20'}}
          />

          {/* (This asset needs to be z-index: 21) */}
          <GrayScaleAsset
            image={selectedMonsterClothesTwoImage}
            alt="monsterClothesTwo"
            style={{zIndex: '21'}}
          />
          {/* (This asset needs to be z-index: 20) */}
          <ColorOverlay
            assetImageMaskWeb={selectedMonsterClothesTwoMaskWeb}
            selectedColor={selectedClothesTwoColor}
            style={{zIndex: '20'}}
          />
        </>
      ) : (
        <></>
      )}

      {/* (All Detail elements should be z-index: 30 and mix-blend-mode: normal) */}

      <GrayScaleAsset
        image={selectedEyeImage}
        alt="eyes"
        style={{zIndex: '30', mixBlendMode: 'normal'}}
      />

      <GrayScaleAsset
        image={selectedHeadImage}
        alt="head"
        style={{zIndex: '30', mixBlendMode: 'normal'}}
      />

      <GrayScaleAsset
        image={selectedNoseImage}
        alt="nose"
        style={{zIndex: '30', mixBlendMode: 'normal'}}
      />

      <GrayScaleAsset
        image={selectedMouthImage}
        alt="mouth"
        style={{zIndex: '30', mixBlendMode: 'normal'}}
      />
    </>
  );
};
const SelectedCustomizedAvatar = () => (
  <SelectedCustomizedAvatarShared
    renderComponent={SelectedCustomizedAvatarRenderComponent}
    useSelector={useSelector}
  />
);

export default SelectedCustomizedAvatar;
