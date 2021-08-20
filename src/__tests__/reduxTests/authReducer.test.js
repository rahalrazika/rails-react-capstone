import authReducer from '../../redux/reducers/authReducer';
import * as types from '../../redux/actions/actionType';

describe('authReducer', () => {
  const initialState = {
    user: null,
    token: '',
  };
  it('should return the initial state', () => {
    const result = authReducer(undefined, {});

    expect(result).toEqual(initialState);
  });

  it('It expect to ge the user', () => {
    expect(authReducer(initialState, { type: types.GET_USER, payload: 'raza' })).toEqual({
      ...initialState,
      user: 'raza',
    });
  });

  it('It expect to ge the save the token', () => {
    expect(authReducer(initialState, { type: types.SAVE_TOKEN, payload: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.1o7K6Vrdzp8m3ik_-aSouVkudXJIrNR25UbICsBNLMA' })).toEqual({
      ...initialState,
      token: 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo3fQ.1o7K6Vrdzp8m3ik_-aSouVkudXJIrNR25UbICsBNLMA',
    });
  });
});
