import React from 'react';
import {Text, View, Image, ImageStyle} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import StaticAsset from './StaticAsset';
import {MultiplyBlendColor} from 'react-native-image-filter-kit';
import SelectedCustomizedAvatarShared, {
  SelectedCustomizedAvatarRenderComponentProps,
} from 'shared/containers/SelectedCustomizedAvatar';
import {useSelector} from 'react-redux';

const IMAGE_HEIGHT = 400;
const IMAGE_WIDTH = 280;
const staticStyle: ImageStyle = {
  width: IMAGE_WIDTH,
  height: IMAGE_HEIGHT,
  position: 'absolute',
  zIndex: 30,
  top: 0,
  left: 0,
};

const SelectedCustomizedAvatarRenderComponent = ({
  selectedAvatar,
  selectedMonsterMaskNative,
  selectedMonsterImage,
  selectedMonsterDetailsImage,
  selectedEyeImage,
  selectedHeadImage,
  selectedNoseImage,
  selectedMouthImage,
  selectedMonsterClothesOneImage,
  selectedMonsterClothesTwoImage,
  selectedMonsterClothesOneMaskNative,
  selectedMonsterClothesTwoMaskNative,
  selectedSkinColor,
  selectedClothesOneColor,
  selectedClothesTwoColor,
}: SelectedCustomizedAvatarRenderComponentProps) => {
  if (!selectedAvatar) {
    return (
      <View>
        <Text>No selected avatar</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
      }}>
      {/* Monster Base (zIndex 10s) */}
      <Image
        source={{uri: selectedMonsterDetailsImage}}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          position: 'absolute',
          zIndex: 12,
          top: 0,
          left: 0,
        }}
      />
      <MaskedView
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              position: 'absolute',
              top: 0,
              left: 0,
            }}>
            <Image
              source={{uri: selectedMonsterMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: selectedMonsterImage}}
              />
            }
            srcColor={selectedSkinColor}
          />
        </View>
      </MaskedView>
      {/* end Monster Skin */}
      {/* Monster Clothes Level 1 (zIndex 20s) */}
      <MaskedView
        style={{position: 'absolute', zIndex: 21}}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              position: 'absolute',
              zIndex: 21,
              top: 0,
              left: 0,
            }}>
            <Image
              source={{uri: selectedMonsterClothesOneMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: selectedMonsterClothesOneImage}}
              />
            }
            srcColor={selectedClothesOneColor}
          />
        </View>
      </MaskedView>
      {/* end Monster Clothes Level 1 */}
      {/* Monster Clothes Level 2 (zIndex 20s) */}
      <MaskedView
        style={{position: 'absolute', zIndex: 20}}
        maskElement={
          <View
            style={{
              backgroundColor: 'transparent',
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              position: 'absolute',
              zIndex: 20,
              top: 0,
              left: 0,
            }}>
            <Image
              source={{uri: selectedMonsterClothesTwoMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: selectedMonsterClothesTwoImage}}
              />
            }
            srcColor={selectedClothesTwoColor}
          />
        </View>
      </MaskedView>
      {/* end Monster Clothes Level 1 */}
      {/* Monster Accessories (zIndex 30s) */}
      <StaticAsset uri={selectedEyeImage} styles={staticStyle} />
      <StaticAsset uri={selectedHeadImage} styles={staticStyle} />
      <StaticAsset uri={selectedNoseImage} styles={staticStyle} />
      <StaticAsset uri={selectedMouthImage} styles={staticStyle} />
    </View>
  );
};

const SelectedCustomizedAvatar = () => (
  <SelectedCustomizedAvatarShared
    renderComponent={SelectedCustomizedAvatarRenderComponent}
    useSelector={useSelector}
  />
);

export default SelectedCustomizedAvatar;
