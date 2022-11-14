import React from 'react';
import StorybookScreenShared, {
  StorybookScreenProps,
} from 'shared/containers/screens/StorybookScreen';
import {configure, getStorybookUI} from '@storybook/react-native';
import {loadStories} from '../../../../storybook/storyLoader';

export default function StorybookScreen(props: StorybookScreenProps) {
  return (
    <StorybookScreenShared
      {...props}
      // eslint-disable-next-line no-empty-pattern
      renderComponent={({}: StorybookScreenProps) => {
        // import stories
        configure(() => {
          loadStories();
        }, module);

        // Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
        // To find allowed options for getStorybookUI
        const StorybookUIRoot = getStorybookUI({
          asyncStorage: null,
          port: 7007,
        });
        return <StorybookUIRoot />;
      }}
    />
  );
}
