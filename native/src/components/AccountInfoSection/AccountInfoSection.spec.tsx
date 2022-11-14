import React from 'react';
import {shallow} from 'enzyme';
import AccountInfoSection from './index';

describe('<AccountInfoSection/>', () => {
  it('renders wrapper', () => {
    expect(shallow(<AccountInfoSection />)).toMatchSnapshot();
  });
  it('renders component', () => {
    const RenderPropComponent = shallow(<AccountInfoSection />).prop('renderComponent');
    expect(
      shallow(
        <RenderPropComponent
          profileImageSource={{uri: 'URL for profile image'}}
          username={'gmom-35'}
        />,
      ),
    ).toMatchSnapshot();
  });
});
