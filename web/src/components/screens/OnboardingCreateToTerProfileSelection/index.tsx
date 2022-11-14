import React from 'react';
import OnboardingCreateToTerShared, {OnboardingCreateToTerRenderProps} from 'shared/containers/screens/OnboardingCreateToTer';
import classes from './OnboardingCreateToTer.module.css';

const OnboardCreateToTerProfileSelection = () => {
  return(
    <OnboardingCreateToTerShared
      renderComponent={({copy}: OnboardingCreateToTerRenderProps) => {
        return (
          <div className={classes.CreateToTer}>
            <div>{copy.addChildTitle}</div>
              <input
                type='button'
                value={copy.addChildUnder13Button}
                onClick={() => alert('will eventually take user to ToTer creation flow (TBD upon  navigation method)')}
                />
          </div>
        );
     }}
    />
  );
}

export default OnboardCreateToTerProfileSelection;
