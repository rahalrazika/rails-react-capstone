import favouriteReducer from '../../redux/reducers/favouriteReducer';

describe('favouriteReducer', () => {
  const initialState = {
    favourites: [],
  };
  it('should return the initial state', () => {
    const result = favouriteReducer(undefined, {});

    expect(result).toEqual(initialState);
  });
});
