import React from 'react';
import {CatalogResponse} from 'shared/models/Door';

interface ColorCustomizationIconProps {
  color: string;
  catalogItem: CatalogResponse;
}

export default function ColorCustomizationIcon(props: ColorCustomizationIconProps) {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: props.color,
      }}
    />
  );
}
