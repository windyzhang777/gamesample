import React, {useEffect, useState} from 'react';
import EditYourDoorShared, {
  EditYourDoorProps,
  EditYourDoorRenderProps,
} from 'shared/containers/screens/EditYourDoor';
import {useDispatch, useSelector} from 'react-redux';
import CustomizationFlow from '../../CustomizationFlow';
import classes from './EditYourDoor.module.css';
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
          <div className={classes.EditYourDoor}>
            <CustomizationHeader headerText={'CHOOSE YOUR DOOR STYLE'} />
            <div
              style={{
                display: 'flex',
                height: 380,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <img src={customizationBrickBackground} />
              <CustomizedDoor />
            </div>
            <CustomizationFlow
              useState={useState}
              useEffect={useEffect}
              customizationFlowConfig={doorsCustomizationFlowConfig}
              useCustomizationConfig={useCurrentDoorCustomizationConfig}
            />
          </div>
        );
      }}
    />
  );
}
