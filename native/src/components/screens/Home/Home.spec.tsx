import React from 'react';
import {shallow} from 'enzyme';
import Home from './index';

describe('Home Component', () => {
  it('renders wrapper', () => {
    expect(shallow(<Home />)).toMatchSnapshot();
  });
  it('renders component without a display name', () => {
    const RenderPropComponent = shallow(<Home />).prop('renderComponent');
    expect(shallow(<RenderPropComponent />)).toMatchSnapshot();
  });
  it('renders component with a display name', () => {
    const RenderPropComponent = shallow(<Home />).prop('renderComponent');
    expect(
      shallow(
        <RenderPropComponent
          displayName="display name comes from redux via shared"
          logout="logout function generated from shared"
          navigationMenu="navigation menu from shared"
        />,
      ),
    ).toMatchSnapshot();
  });
});
