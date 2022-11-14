import React from 'react';
import {View} from 'react-native';
import {CatalogResponse} from 'src/models/Door';

interface ColorCustomizationIconProps {
  color: string;
  catalogItem: CatalogResponse;
}

export default function ColorCustomizationIcon(props: ColorCustomizationIconProps) {
  return (
    <View
      style={{
        width: 36,
        height: 36,
        margin: 8,
        backgroundColor: props.color,
        borderRadius: 18,
      }}
    />
  );
}
