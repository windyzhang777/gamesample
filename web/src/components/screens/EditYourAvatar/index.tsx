import React, {useState, useEffect} from 'react';
import EditYourAvatarShared, {
  EditYourAvatarProps,
  EditYourAvatarRenderProps,
} from 'shared/containers/screens/EditYourAvatar';
import {useDispatch, useSelector} from 'react-redux';
import CustomizationFlow from '../../CustomizationFlow';
import classes from './EditYourAvatar.module.css';
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
          <div className={classes.EditYourAvatar}>
            <CustomizationHeader headerText={'CHOOSE YOUR AVATAR STYLE'} />
            <div
              style={{
                display: 'flex',
                height: '380px',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <img src={customizationBrickBackground} />
              <CustomizedAvatar />
            </div>
            <div
              style={{
                backgroundColor: '#010c2e',
                height: '40vh',
              }}>
              <CustomizationFlow
                useState={useState}
                useEffect={useEffect}
                customizationFlowConfig={avatarsCustomizationFlowConfig}
                useCustomizationConfig={useCurrentAvatarCustomizationConfig}
              />
            </div>
          </div>
        );
      }}
    />
  );
}
