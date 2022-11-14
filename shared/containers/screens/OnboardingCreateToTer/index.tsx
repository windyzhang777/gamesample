import {RenderedComponent} from 'shared/models/RenderedComponent';

export interface OnboardingCreateToTerRenderProps {
  copy: {
    overviewTitle1: string;
    overviewTitle2: string;
    overviewSetUpButton: string;
    overviewSkipButton: string;
    addChildTitle: string;
    addChildOver13Button: string;
    addChildUnder13Button: string;
  };
}

export default function CreateInitialToTer({
  renderComponent,
}: RenderedComponent<OnboardingCreateToTerRenderProps>) {
  const renderProps: OnboardingCreateToTerRenderProps = {
    copy: {
      overviewTitle1: 'Create profiles for your kids',
      // eslint-disable-next-line
      overviewTitle2: 'Help your trick-or-treaters make their own spooky monster avatars -- and get ready for Halloween!',
      overviewSetUpButton: 'Set up Trick or Treaters',
      overviewSkipButton: 'Skip Trick or Treater Setup',
      addChildTitle: 'Create Trick or Treater profile',
      addChildOver13Button: 'Add a child over 13 years old',
      addChildUnder13Button: 'Add a child under 13 years old',
    },
  };
  return renderComponent(renderProps);
}
