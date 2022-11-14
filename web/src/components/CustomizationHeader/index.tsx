import React from 'react';
import SharedCustomizationHeader, {
  CustomizationHeaderProps,
} from 'shared/containers/CustomizationHeader';
import classes from './CustomizationHeader.module.css';
import customizationHeaderImage from '../../assets/images/CustomizationHeader.png';

export default function CustomizationHeader(props: CustomizationHeaderProps) {
  return (
    <SharedCustomizationHeader
      {...props}
      renderComponent={({headerText}: CustomizationHeaderProps) => {
        return (
          <div className={classes.CustomizationHeader}>
            <img className={classes.CustomizationHeaderImage} src={customizationHeaderImage} />
            <span className={classes.CustomizationHeaderText}>{headerText}</span>
          </div>
        );
      }}
    />
  );
}
