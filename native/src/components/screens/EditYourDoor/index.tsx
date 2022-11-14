import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import EditYourDoorShared, {
  EditYourDoorProps,
  EditYourDoorRenderProps,
} from 'shared/containers/screens/EditYourDoor';
import {useDispatch, useSelector} from 'react-redux';
import CustomizationFlow from '../../CustomizationFlow';
import {View, Image} from 'react-native';
import CustomizedDoor from '../../CustomizedDoor';
import CustomizationHeader from '../../CustomizationHeader';
import customizationBrickBackground from '../../../assets/images/CustomizationBrick.png';

export default function EditYourDoor(props: EditYourDoorProps) {
  return (
    <EditYourDoorShared
      {...props}
      useDispatch={useDispatch}
      useEffect={useEffect}
      useSelector={useSelector}
      renderComponent={({
        useCurrentDoorCustomizationConfig,
        doorsCustomizationFlowConfig,
      }: EditYourDoorProps & EditYourDoorRenderProps) => {
        return (
          <LinearGradient
            colors={['#0E2B57', '#000C2E']}
            style={{
              flex: 1,
              backgroundColor: '#000C2E',
            }}>
            <CustomizationHeader headerText={'CHOOSE YOUR DOOR STYLE'} />
            <View
              style={{
                height: 425,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={customizationBrickBackground} />
              <CustomizedDoor />
            </View>
            <CustomizationFlow
              useState={useState}
              useEffect={useEffect}
              customizationFlowConfig={doorsCustomizationFlowConfig}
              useCustomizationConfig={useCurrentDoorCustomizationConfig}
            />
          </LinearGradient>
        );
      }}
    />
  );
}
