import React from 'react';
import SharedCustomizationFlowNavigation, {
  CustomizationFlowNavigationProps,
} from 'shared/containers/CustomizationFlowNavigation';
import classes from './CusotmizationFlowNavigation.module.css';

export default function CustomizationFlowNavigation(
  props: CustomizationFlowNavigationProps,
): JSX.Element {
  return (
    <SharedCustomizationFlowNavigation
      {...props}
      renderComponent={({
        previousText,
        nextText,
        showPreviousButton,
        showNextButton,
        onPreviousCallback,
        onNextCallback,
      }: CustomizationFlowNavigationProps) => {
        return (
          <div className={classes.CustomizationFlowNavigation}>
            {showPreviousButton ? (
              <button
                onClick={onPreviousCallback}
                className={classes.CustomizationFlowNavigationButton}
                style={{
                  marginRight: showNextButton ? 8 : 0,
                }}>
                <span className={classes.CustomizationFlowNavigationText}>{previousText}</span>
              </button>
            ) : (
              <></>
            )}
            {showNextButton ? (
              <button
                onClick={onNextCallback}
                className={classes.CustomizationFlowNavigationButton}
                style={{
                  backgroundColor: '#B1CC4E',
                }}>
                <span className={classes.CustomizationFlowNavigationText}>{nextText}</span>
              </button>
            ) : (
              <></>
            )}
          </div>
        );
      }}
    />
  );
}
