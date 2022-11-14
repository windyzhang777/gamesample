import React from 'react';
import {useSelector} from 'react-redux';
import {Text, View, Image} from 'react-native';
import CustomizedDoorShared, {
  CustomizedDoorProps,
  CustomizedDoorRenderProps,
} from 'shared/containers/CustomizedDoor';
import MaskedView from '@react-native-community/masked-view';
import {MultiplyBlendColor} from 'react-native-image-filter-kit';

const IMAGE_HEIGHT = 400;
const IMAGE_WIDTH = 280;

export default function CustomizedDoor(props: CustomizedDoorProps) {
  return (
    <CustomizedDoorShared
      {...props}
      useSelector={useSelector}
      renderComponent={({
        currentDoorCustomizations,
        contentState,
        doorColor,
      }: CustomizedDoorProps & CustomizedDoorRenderProps) => {
        if (!currentDoorCustomizations.doors) {
          return (
            <View>
              <Text>No selected door</Text>
            </View>
          );
        }

        if (!currentDoorCustomizations.doors) {
          return (
            <View>
              <Text>No selected door [{currentDoorCustomizations.doors}] not found in doors.</Text>
            </View>
          );
        }

        const {doorImageMaskNative, grayscaleImage, doorDetailsImage} = {
          doorImageMaskNative:
            contentState[
              'doors/' +
                currentDoorCustomizations.doors +
                '/' +
                currentDoorCustomizations.doors +
                '_mask.png'
            ],
          grayscaleImage:
            contentState[
              'doors/' +
                currentDoorCustomizations.doors +
                '/' +
                currentDoorCustomizations.doors +
                '.png'
            ],
          doorDetailsImage:
            contentState[
              'doors/' +
                currentDoorCustomizations.doors +
                '/' +
                currentDoorCustomizations.doors +
                '_details.png'
            ],
        };

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
              {currentDoorCustomizations.decorations.map((itemId: string) => (
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
      }}
    />
  );
}
