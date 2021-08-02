import { Route, Switch } from 'react-router';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import MainPage from '../pages/MainPage';
import '../style/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
