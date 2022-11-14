import React from 'react';
import {shallow} from 'enzyme';
import EditToTer from './index';

describe('Home Component', () => {
  it('renders wrapper', () => {
    expect(shallow(<EditToTer />)).toMatchSnapshot();
  });
  it('renders component with a display name', () => {
    const RenderPropComponent = shallow(<EditToTer />).prop('renderComponent');
    expect(
      shallow(
        <RenderPropComponent
          toter={{toterName: 'Trick or Treater Name', toterId: 'ToTer ID'}}
          goBackCallback="function generated from to be called on back"
        />,
      ),
    ).toMatchSnapshot();
  });
});
