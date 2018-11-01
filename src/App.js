import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Login from './components/Login/login';
import Contacts from './components/Contacts/contacts';
import Registration from './components/Registration/registration';
import Spinner from './components/Spinner/spinner.jsx';
import AuthRoute from './helpers/Auth-route';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }

  login() {
    const { history } = this.props;
    this.setState({ isAuthenticated: true });
    history.replace('/contacts');
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <header>
            <h1>Awesome app!</h1>
          </header>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route
              exact
              path="/login"
              render={() => <Login login={this.login} />}
            />
            <Route exact path="/register" component={Registration} />
            <AuthRoute
              exact
              path="/contacts"
              component={Contacts}
              props={{ isAuthenticated }}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
