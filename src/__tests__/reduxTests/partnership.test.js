import partnershipReducer from '../../redux/reducers/partnershipReducer';

describe('partnershipReducer', () => {
  it('should return the initial state', () => {
    const expected = { partnerships: [] };

    const result = partnershipReducer(undefined, {});

    expect(result).toEqual(expected);
  });
});
