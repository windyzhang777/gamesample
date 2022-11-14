import React from 'react';
import {CustomizedAvatarProps} from './props';
import StaticAsset from './StaticAsset';
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

// The Render Component will take all the shared props/state from a shared component and use thead to render in
// the platform specific way.  There should not be any logic here.  This will be view only.
export default function CustomizedAvatar({
  currentAvatarCustomizations,
  eyeImage,
  headImage,
  noseImage,
  mouthImage,
  costumeFrontImage,
  costumeBackImage,
  avatarImage,
  avatarDetailsImage,
  avatarMaskNative,
  avatarClothesOneImage,
  avatarClothesTwoImage,
  avatarClothesOneMaskNative,
  avatarClothesTwoMaskNative,
  skinColor,
  clothesOneColor,
  clothesTwoColor,
}: CustomizedAvatarProps) {
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
        top: 0,
      }}>
      {/* Monster Costume Back (zIndex 9s) */}
      <Image
        source={{uri: costumeBackImage}}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          position: 'absolute',
          zIndex: 9,
          top: 0,
          left: 0,
        }}
      />
      {/* end Monster Costume Back */}
      {/* Monster Base (zIndex 10s) */}
      <Image
        source={{uri: avatarDetailsImage}}
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
        style={{position: 'absolute', zIndex: 12}}
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
              source={{uri: avatarMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: avatarImage}}
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
              source={{uri: avatarClothesOneMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: avatarClothesOneImage}}
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
              source={{uri: avatarClothesTwoMaskNative}}
              style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
            />
          </View>
        }>
        <View>
          <MultiplyBlendColor
            dstImage={
              <Image
                style={{width: IMAGE_WIDTH, height: IMAGE_HEIGHT}}
                source={{uri: avatarClothesTwoImage}}
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
      {/* Monster Costume Front (zIndex 40s) */}
      <Image
        source={{uri: costumeFrontImage}}
        style={{
          width: IMAGE_WIDTH,
          height: IMAGE_HEIGHT,
          position: 'absolute',
          zIndex: 40,
          top: 0,
          left: 0,
        }}
      />
      {/* end Monster Costume Front */}
    </View>
  );
}
