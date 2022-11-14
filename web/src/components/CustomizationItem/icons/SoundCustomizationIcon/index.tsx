import React, {MutableRefObject, useImperativeHandle} from 'react';
import {useSelector} from 'react-redux';
import {contentSelector} from 'shared/store/content/selectors';
import {CatalogResponse} from 'shared/models/Door';
import {RootState} from '../../../../store';

interface SoundCustomiztionIconProps {
  catalogItem: CatalogResponse;
}

export default React.forwardRef<() => void, SoundCustomiztionIconProps>(
  ({catalogItem}: SoundCustomiztionIconProps, onPressCallbackRef) => {
    const content = useSelector<RootState, {[key: string]: string}>(contentSelector);
    let soundEffect = new Audio(content[`sounds/${catalogItem.ItemId}.mp3`]);
    useImperativeHandle(onPressCallbackRef, () => () => {
      soundEffect.play();
    });
    return (
      <div
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: 105,
          height: 48,
          color: '#000',
        }}>
        <span>{catalogItem.DisplayName}</span>
      </div>
    );
  },
);
