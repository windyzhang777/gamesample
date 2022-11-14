import candyBowl from './reducer';
import {login, logout} from '../authentication/actions';
import {buyCandyAction, updateCandyCount} from './actions';

describe('Candy Bowl Reducer', () => {
  it('should show zero candy to start', () => {
    const previousState = undefined;

    const action = {};

    expect(candyBowl(previousState, action)).toEqual({
      candy: 0,
    });
  });

  it('should set the candy at login, ignoring previous candy value', () => {
    const previousState = {
      candy: 30,
    };

    const action = login.success({
      InfoResultPayload: {
        UserVirtualCurrency: {
          VC: 40,
        },
      },
    });

    expect(candyBowl(previousState, action)).toEqual({
      candy: 40,
    });
  });

  it('should clear the state post login', () => {
    expect(candyBowl({candy: 30}, logout.success())).toEqual({
      candy: 0,
    });
  });

  it('should set the candy after a purchase; backend returns new total so resyncing happens at this time', () => {
    const previousState = {
      candy: 10,
    };

    const action = buyCandyAction.success({
      Balance: 20,
    });

    expect(candyBowl(previousState, action)).toEqual({
      candy: 20,
    });
  });

  it('should update the candy count after a trick or treater has come to the door', () => {
    const previousState = {
      candy: 10,
    };

    const action = updateCandyCount.success({
      VirtualCurrency: {
        VC: 9,
      },
    });

    expect(candyBowl(previousState, action)).toEqual({
      candy: 9,
    });
  });
});
