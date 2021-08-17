import projectReducer from '../../redux/reducers/projectReducer';

describe('projectReducer', () => {
  it('should return the initial state', () => {
    const expected = { projects: [] };

    const result = projectReducer(undefined, {});

    expect(result).toEqual(expected);
  });
});
