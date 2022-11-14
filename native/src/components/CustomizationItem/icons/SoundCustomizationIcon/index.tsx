import React, {useImperativeHandle} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {CatalogResponse} from 'src/models/Door';
import Sound from 'src/components/Sound';
import {ContentState} from 'src/store/content/reducer';

interface SoundCustomiztionIconProps {
  catalogItem: CatalogResponse;
  content: ContentState;
}

const styles = StyleSheet.create({
  SoundCustomiztionIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 48,
    margin: 8,
  },
});

export default React.forwardRef<() => void, SoundCustomiztionIconProps>(
  ({catalogItem, content}: SoundCustomiztionIconProps, onPressCallbackRef) => {
    const soundEffect = new Sound(content[`${catalogItem.ItemClass}/${catalogItem.ItemId}.mp3`]);
    useImperativeHandle(onPressCallbackRef, () => () => {
      soundEffect.play();
    });
    return (
      <View style={styles.SoundCustomiztionIcon}>
        <Text>{catalogItem['DisplayName']}</Text>
      </View>
    );
  },
);
