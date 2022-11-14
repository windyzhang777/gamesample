import React, {useImperativeHandle} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {contentSelector} from 'shared/store/content/selectors';
import {CatalogResponse} from 'shared/models/Door';
import Sound from 'react-native-sound';
import {RootState} from 'src/store';

interface SoundCustomiztionIconProps {
  catalogItem: CatalogResponse;
}

export default React.forwardRef<() => void, SoundCustomiztionIconProps>(
  ({catalogItem}: SoundCustomiztionIconProps, onPressCallbackRef) => {
    const content = useSelector<RootState, {[key: string]: string}>(contentSelector);
    let soundEffect = new Sound(content[`sounds/${catalogItem.ItemId}.mp3`]);
    useImperativeHandle(onPressCallbackRef, () => () => {
      soundEffect.play();
    });
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: 105,
          height: 48,
          margin: 8,
        }}>
        <Text>{catalogItem.DisplayName}</Text>
      </View>
    );
  },
);
