import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import EditYourAvatarShared, {
  EditYourAvatarProps,
  EditYourAvatarRenderProps,
} from 'shared/containers/screens/EditYourAvatar';
import {useDispatch, useSelector} from 'react-redux';
import {View, Image} from 'react-native';
import CustomizationFlow from '../../CustomizationFlow';
import CustomizationHeader from '../../CustomizationHeader';
import customizationBrickBackground from '../../../assets/images/CustomizationBrick.png';
import CustomizedAvatar from '../../CustomizedAvatar';

export default function EditYourAvatar(props: EditYourAvatarProps) {
  return (
    <EditYourAvatarShared
      {...props}
      useDispatch={useDispatch}
      useEffect={useEffect}
      useSelector={useSelector}
      renderComponent={({
        useCurrentAvatarCustomizationConfig,
        avatarsCustomizationFlowConfig,
      }: EditYourAvatarProps & EditYourAvatarRenderProps) => {
        return (
          <LinearGradient
            colors={['#0E2B57', '#000C2E']}
            style={{
              flex: 1,
              backgroundColor: '#000C2E',
            }}>
            <CustomizationHeader headerText={'CHOOSE YOUR AVATAR STYLE'} />
            <View
              style={{
                height: 425,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={customizationBrickBackground} />
              <CustomizedAvatar />
            </View>
            <CustomizationFlow
              useState={useState}
              useEffect={useEffect}
              customizationFlowConfig={avatarsCustomizationFlowConfig}
              useCustomizationConfig={useCurrentAvatarCustomizationConfig}
            />
          </LinearGradient>
        );
      }}
    />
  );
}
