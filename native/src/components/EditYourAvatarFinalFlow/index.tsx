import React from 'react';
import {View, Text} from 'react-native';
import ShineButton from 'src/components/buttons/ShineButton';
import EditIcon from 'src/assets/images/Edit-Icon.png';
import ShareIcon from 'src/assets/images/Share-Icon.png';
import CustomizationFlowNavigation from 'src/components/CustomizationFlowNavigation';
import {LocalImage} from 'src/components/LocalImage';

export interface EditYourAvatarFinalFlowProps {
  handleShare: () => void;
  handleEditYourAvatar: () => void;
  handleNext: () => void;
}

function EditYourAvatarFinalFlow({
  handleShare,
  handleEditYourAvatar,
  handleNext,
}: EditYourAvatarFinalFlowProps) {
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
                EDIT YOUR AVATAR
              </Text>
            </View>
          }
          onPress={handleEditYourAvatar}
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
                SHARE
              </Text>
            </View>
          }
          onPress={handleShare}
        />
      </View>
      <CustomizationFlowNavigation
        onNextCallback={handleNext}
        onPreviousCallback={() => {}}
        showPreviousButton={false}
      />
    </View>
  );
}

export default EditYourAvatarFinalFlow;
