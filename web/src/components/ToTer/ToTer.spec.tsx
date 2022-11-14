import React from 'react';
import {shallow} from 'enzyme';
import ToTer from './index';

const render = (props: any) => shallow(<ToTer {...props} />);

describe('ToTer Component', () => {
  it('renders with default props', () => {
    expect(render({})).toMatchSnapshot();
  });
});
