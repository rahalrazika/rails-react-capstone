import * as types from '../../redux/actions/actionType';

describe('actions', () => {
  it('should have a type of ADD_FAVOURITE', () => {
    expect(types.ADD_FAVOURITE).toEqual('ADD_FAVOURITE');
  });
});

describe('actions', () => {
  it('should have a type of GET_USER', () => {
    expect(types.GET_USER).toEqual('GET_USER');
  });
});

describe('actions', () => {
  it('should have a type of SAVE_TOKEN', () => {
    expect(types.SAVE_TOKEN).toEqual('SAVE_TOKEN');
  });
});

describe('actions', () => {
  it('should have a type of ALL_PROJECTS', () => {
    expect(types.ALL_PROJECTS).toEqual('ALL_PROJECTS');
  });
});

describe('actions', () => {
  it('should have a type of FAVOURITES', () => {
    expect(types.FAVOURITES).toEqual('FAVOURITES');
  });
});

describe('actions', () => {
  it('should have a type of PARTNERSHIP', () => {
    expect(types.PARTNERSHIP).toEqual('PARTNERSHIP');
  });
});
describe('actions', () => {
  it('should have a type of ADD_PARTNERSHIP', () => {
    expect(types.ADD_PARTNERSHIP).toEqual('ADD_PARTNERSHIP');
  });
});

describe('actions', () => {
  it('should have a type of REMOVE_PARTNERSHIP', () => {
    expect(types.REMOVE_PARTNERSHIP).toEqual('REMOVE_PARTNERSHIP');
  });
});

describe('actions', () => {
  it('should have a type of REMOVE_FAVOURITE', () => {
    expect(types.REMOVE_FAVOURITE).toEqual('REMOVE_FAVOURITE');
  });
});
