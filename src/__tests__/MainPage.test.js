import MainPage from '../pages/MainPage';

describe('MainPage.mapStateToProps', () => {
  test('expect mapStateToProps to threw an error ', () => {
    const callFunction = () => {
      MainPage.mapStateToProps({ projectReducer: { projects: 'Raza' } });
    };

    expect(callFunction).toThrow();
  });

  test('expect mapStateToProps to threw an error', () => {
    const callFunction = () => {
      MainPage.mapStateToProps({});
    };

    expect(callFunction).toThrow();
  });
});
