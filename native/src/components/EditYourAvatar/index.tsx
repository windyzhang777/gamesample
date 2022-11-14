import React from 'react';
//import LinearGradient from 'react-native-linear-gradient'; TODO: get this version to work, layout issues on web
import {View} from 'react-native';
import customizationBrickBackground from 'src/assets/images/CustomizationBrick.png';
import CustomizationHeader from 'src/components/CustomizationHeader';
import ConnectedCustomizedAvatar from 'src/containers/ConnectedCustomizedAvatar';
import CustomizationFlow from 'src/components/CustomizationFlow';
import {CustomizationFlowSection} from 'src/models/CustomizationFlowSection';
import {LocalImage} from 'src/components/LocalImage';
import LinearGradient from '../LinearGradient';
import ConnectedEditYourAvatarFinalFlow from 'src/containers/ConnectedEditYourAvatarFinalFlow';
import {ContentState} from 'src/store/content/reducer';

export interface EditYourAvatarProps {
  useCurrentAvatarCustomizationConfig: any; //[AvatarCustomizations, (payload: any) => void];
  avatarsCustomizationFlowConfig: CustomizationFlowSection[];
  isSaving: boolean;
  isSaved: boolean;
  triggerFlowEndCallback: () => void;
  content: ContentState;
}

export default function EditYourAvatar({
  avatarsCustomizationFlowConfig,
  useCurrentAvatarCustomizationConfig,
  isSaving,
  isSaved,
  triggerFlowEndCallback,
  content,
}: EditYourAvatarProps) {
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
        <LocalImage source={customizationBrickBackground} style={{width: '100%', height: '100%'}} />
        <ConnectedCustomizedAvatar />
      </View>
      <CustomizationFlow
        showEndFlowPane={isSaved && !isSaving}
        triggerFlowEndCallback={triggerFlowEndCallback}
        endFlowPane={(useCurrentIndex) => (
          <ConnectedEditYourAvatarFinalFlow useCurrentIndex={useCurrentIndex} />
        )}
        customizationFlowConfig={avatarsCustomizationFlowConfig}
        useCustomizationConfig={useCurrentAvatarCustomizationConfig}
        content={content}
      />
    </LinearGradient>
  );
}
