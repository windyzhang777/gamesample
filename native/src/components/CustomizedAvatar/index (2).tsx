import React from 'react';
import CustomizedAvatarShared, {
  CustomizedAvatarRenderProps,
  SelectedCustomizedAvatarRenderProps,
} from 'shared/containers/CustomizedAvatar';
import StaticAsset from './StaticAsset';
import {useSelector} from 'react-redux';
import {Text, View, Image, ImageStyle} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import {MultiplyBlendColor} from 'react-native-image-filter-kit';

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

// The Render Component will take all the shared props/state from a shared component and use that to render in
// the platform specific way.  There should not be any logic here.  This will be view only.
const CustomizedAvatarRenderComponent = ({
  currentAvatarCustomizations,
  monsterMaskNative,
  monsterImage,
  monsterDetailsImage,
  eyeImage,
  headImage,
  noseImage,
  mouthImage,
  monsterClothesOneImage,
  monsterClothesTwoImage,
  monsterClothesOneMaskNative,
  monsterClothesTwoMaskNative,
  skinColor,
  clothesOneColor,
  clothesTwoColor,
}: CustomizedAvatarRenderProps & SelectedCustomizedAvatarRenderProps) => {
  if (!currentAvatarCustomizations.avatar) {
    return (
      <View>
        <Text>No Selected Avatar</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT,
        position: 'absolute',
      }}>
      {/* Monster Base (zIndex 10s) */}
      <Image
        source={{uri: monsterDetailsImage}}
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
              display: 'flex',
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: monsterMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: monsterImage}}
              />
            }
            srcColor={skinColor}
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
              display: 'flex',
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: monsterClothesOneMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: monsterClothesOneImage}}
              />
            }
            srcColor={clothesOneColor}
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
              display: 'flex',
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: monsterClothesTwoMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: monsterClothesTwoImage}}
              />
            }
            srcColor={clothesTwoColor}
          />
        </View>
      </MaskedView>
      {/* end Monster Clothes Level 1 */}
      {/* Monster Accessories (zIndex 30s) */}
      <StaticAsset uri={eyeImage} styles={staticStyle} />
      <StaticAsset uri={headImage} styles={staticStyle} />
      <StaticAsset uri={noseImage} styles={staticStyle} />
      <StaticAsset uri={mouthImage} styles={staticStyle} />
    </View>
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
