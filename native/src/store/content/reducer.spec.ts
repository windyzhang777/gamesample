import contentSlice from './reducer';
import {logout} from '../authentication/actions';
import {cacheContent} from './actions';

describe('Content Reducer', () => {
  it('should be empty to start', () => {
    const previousState = undefined;

    const action = {};

    expect(contentSlice(previousState, action)).toEqual({});
  });

  it('should clear on logout as the CDN links are user specific', () => {
    const previousState = {
      a: 'bunch',
      of: 'urls',
    };

    const action = logout.success();

    expect(contentSlice(previousState, action)).toEqual({});
  });

  it('should store the URL in the reducer when cached', () => {
    const previousState = {
      a: 'bunch',
      of: 'urls',
    };

    const action = cacheContent.success({
      key: 'new-content.jpg',
      url: 'https://cdn.cdn/really/long/url',
    });

    expect(contentSlice(previousState, action)).toEqual({
      a: 'bunch',
      of: 'urls',
      'new-content.jpg': 'https://cdn.cdn/really/long/url',
    });
  });
});
