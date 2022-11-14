import React from 'react';
import {View} from 'react-native';
import customizationBrickBackground from 'src/assets/images/CustomizationBrick.png';
import CustomizationFlow from 'src/components/CustomizationFlow';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';
import CustomizationHeader from 'src/components/CustomizationHeader';
import LinearGradient from 'src/components/LinearGradient';
import {LocalImage} from 'src/components/LocalImage';
import ConnectedCustomizedDoor from 'src/containers/ConnectedCustomizedDoor';
import CustomizationFinalFlow from 'src/components/CustomizationFinalFlow';
import {ContentState} from 'src/store/content/reducer';

export interface EditYourDoorProps {
  useCurrentDoorCustomizationConfig: any; //[DoorCustomizations, (payload: any) => void];
  doorsCustomizationFlowConfig: CustomizationFlowSection[];
  isSaving: boolean;
  isSaved: boolean;
  triggerFlowEndCallback: () => void;
  finalFlowOnNextCallback: () => void;
  finalFlowOnShareCallback: () => void;
  finalFlowOnEditCallback: (useCurrentIndex: [any, any]) => void;
  content: ContentState;
}

export default function EditYourDoor({
  useCurrentDoorCustomizationConfig,
  doorsCustomizationFlowConfig,
  isSaved,
  isSaving,
  triggerFlowEndCallback,
  finalFlowOnNextCallback,
  finalFlowOnShareCallback,
  finalFlowOnEditCallback,
  content,
}: EditYourDoorProps) {
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
        <LocalImage source={customizationBrickBackground} style={{width: '100%', height: '100%'}} />
        <ConnectedCustomizedDoor />
      </View>
      <CustomizationFlow
        showEndFlowPane={isSaved && !isSaving}
        triggerFlowEndCallback={triggerFlowEndCallback}
        endFlowPane={(useCurrentIndex) => (
          <CustomizationFinalFlow
            onShareCallback={finalFlowOnShareCallback}
            onEditCallback={finalFlowOnEditCallback.bind(null, useCurrentIndex)}
            onNextCallback={finalFlowOnNextCallback}
            shareText={'Share'}
            editText={'Edit your door'}
            nextText={'Place on map'}
          />
        )}
        customizationFlowConfig={doorsCustomizationFlowConfig}
        useCustomizationConfig={useCurrentDoorCustomizationConfig}
        content={content}
      />
    </LinearGradient>
  );
}
