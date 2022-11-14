import React from 'react';
import {View, Text} from 'react-native';
import ShineButton from 'src/components/buttons/ShineButton';
import EditIcon from 'src/assets/images/Edit-Icon.png';
import ShareIcon from 'src/assets/images/Share-Icon.png';
import CustomizationFlowNavigation from 'src/components/CustomizationFlowNavigation';
import {LocalImage} from 'src/components/LocalImage';

export interface CustomizationFinalFlowProps {
  onShareCallback: () => void;
  onNextCallback: () => void;
  onEditCallback: () => void;
  shareText: string;
  editText: string;
  nextText: string;
}

export default function CustomizationFinalFlow({
  onShareCallback,
  onNextCallback,
  onEditCallback,
  shareText,
  editText,
  nextText,
}: CustomizationFinalFlowProps) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'center',
          marginHorizontal: 16,
        }}>
        <ShineButton
          style={{
            height: 50,
            marginBottom: 16,
          }}
          buttonContent={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <LocalImage
                source={EditIcon}
                style={{
                  marginRight: 16,
                  // TODO: I Don't know what size these should be, but not having a size will make them invisible.
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Tungsten-Bold',
                }}>
                {editText}
              </Text>
            </View>
          }
          onPress={onEditCallback}
        />
        <ShineButton
          style={{
            height: 50,
          }}
          buttonContent={
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <LocalImage
                source={ShareIcon}
                style={{
                  marginRight: 16,
                  // TODO: I Don't know what size these should be, but not having a size will make them invisible.
                  width: 20,
                  height: 20,
                }}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Tungsten-Bold',
                }}>
                {shareText}
              </Text>
            </View>
          }
          onPress={onShareCallback}
        />
      </View>
      <CustomizationFlowNavigation
        nextText={nextText}
        onNextCallback={onNextCallback}
        onPreviousCallback={() => {}}
        showPreviousButton={false}
      />
    </View>
  );
}
