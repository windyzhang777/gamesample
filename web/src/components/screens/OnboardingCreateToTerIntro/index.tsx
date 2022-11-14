import React from 'react';
import OnboardingCreateToTerShared, {OnboardingCreateToTerRenderProps} from 'shared/containers/screens/OnboardingCreateToTer';
import classes from './OnboardingCreateToTer.module.css';

const OnboardCreateToTerIntro = () => {
  return (
    <OnboardingCreateToTerShared
    renderComponent={({copy}: OnboardingCreateToTerRenderProps) => {
      return (
        <div className={classes.CreateToTer}>
        <div>{copy.overviewTitle1}</div>
        <div>{copy.overviewTitle2}</div>
          <input
            type='button'
            value={copy.overviewSetUpButton}
            onClick={() => alert('will eventually take user to Onboarding - Profile Selection screen (TBD upon  navigation method)')}
            />
          <input
            type='button'
            value={copy.overviewSkipButton}
            onClick={() => alert('will eventually take user to Map screen (TBD upon  navigation method)')}
            />
      </div>
      )
    }}
    />
  );
}

export default OnboardCreateToTerIntro;
