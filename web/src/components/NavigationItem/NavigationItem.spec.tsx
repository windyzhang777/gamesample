import React from 'react';
import {shallow} from 'enzyme';
import NavigationItem from './index';

const render = (props: any) => shallow(<NavigationItem {...props} />);

describe('NavigationItem Component', () => {
  it('renders with default props', () => {
    expect(render({})).toMatchSnapshot();
  });
});
