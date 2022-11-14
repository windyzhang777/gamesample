import React from 'react';
import {View, Image, Text} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import {MultiplyBlendColor} from 'react-native-image-filter-kit';
import {CustomizedDoorProps} from './props';

const IMAGE_HEIGHT = 400;
const IMAGE_WIDTH = 280;

export default function CustomizedDoor({
  baseDoor,
  currentDoorCustomizations,
  doorColor,
  decorations,
  contentState,
}: CustomizedDoorProps) {
  const {doorImageMaskNative, grayscaleImage, doorDetailsImage} = {
    doorImageMaskNative: contentState['doors/' + baseDoor + '/' + baseDoor + '_mask.png'],
    grayscaleImage: contentState['doors/' + baseDoor + '/' + baseDoor + '.png'],
    doorDetailsImage: contentState['doors/' + baseDoor + '/' + baseDoor + '_details.png'],
  };

  if (!currentDoorCustomizations.doors) {
    return (
      <View>
        <Text>No selected door</Text>
      </View>
    );
  }

  return (
    <MaskedView
      style={{
        position: 'absolute',
      }}
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
            source={{uri: doorImageMaskNative}}
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
            }}
          />
        </View>
      }>
      <View>
        <MultiplyBlendColor
          dstImage={
            <Image
              style={{
                width: IMAGE_WIDTH,
                height: IMAGE_HEIGHT,
              }}
              source={{uri: grayscaleImage}}
            />
          }
          srcColor={doorColor}
        />
        <Image
          source={{uri: doorDetailsImage}}
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        {decorations.map((itemId: string) => (
          <Image
            key={itemId}
            source={{
              uri: contentState['decorations/' + itemId + '/' + itemId + '.png'],
            }}
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        ))}
      </View>
    </MaskedView>
  );
}
