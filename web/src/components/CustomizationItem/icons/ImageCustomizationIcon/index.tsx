import React from 'react';
import {contentSelector} from 'shared/store/content/selectors';
import {useSelector} from 'react-redux';
import {CatalogResponse} from 'shared/models/Door';
import {ContentState} from 'shared/store/content/reducer';

interface ImageCustomizationIconProps {
  catalogItem: CatalogResponse;
}

export default function ImageCustomizationIcon({catalogItem}: ImageCustomizationIconProps) {
  const content: ContentState = useSelector(contentSelector);
  const imageURL =
    content[`${catalogItem.ItemClass}/${catalogItem.ItemId}/${catalogItem.ItemId}.png`];

  return (
    <img
      src={imageURL}
      style={{
        width: '50px',
        height: '70px',
      }}
    />
  );
}
