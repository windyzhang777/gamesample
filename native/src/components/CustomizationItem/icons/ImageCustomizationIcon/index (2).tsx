import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {contentSelector} from 'shared/store/content/selectors';
import {CatalogResponse} from 'shared/models/Door';

interface ImageCustomizationIconProps {
  catalogItem: CatalogResponse;
}

export default function ImageCustomizationIcon({catalogItem}: ImageCustomizationIconProps) {
  const content = useSelector(contentSelector);
  const imageURL =
    content[`${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}.png`];
  return (
    <Image
      source={{
        uri: imageURL,
      }}
      style={{
        width: 50,
        height: 70,
        margin: 8,
      }}
    />
  );
}
