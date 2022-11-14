import pillowcase from './reducer';
import {login} from '../authentication/actions';

describe('Pillowcase Reducer', () => {
  it('should be empty to start', () => {
    const previousState = undefined;

    const action = {};

    expect(pillowcase(previousState, action)).toEqual({
      pillowcases: [],
    });
  });

  it('should add an empty pillowcase for the user upon login', () => {
    const previousState = undefined;

    const action = login.success({
      InfoResultPayload: {
        CharacterList: [
          {
            CharacterName: 'VinceLombardi',
            CharacterId: '42',
          },
        ],
      },
    });

    expect(pillowcase(previousState, action)).toEqual({
      pillowcases: [
        {
          name: 'VinceLombardi',
          id: '42',
        },
      ],
    });
  });
});
