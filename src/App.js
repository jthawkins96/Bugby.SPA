import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';

import './App.scss';
import { selectCurrentUser } from './redux/auth/authSelectors';

const App = props => {
  return (
      <div id='main-body'>
        { getRoutes(props.user) }
      </div>
  );
}

function getRoutes(username) {
  if(username) {
    return (
      <Switch>
        <Route path="/" component={ HomePage } />
        <Redirect to="/" />
      </Switch>
    )
  }
  else {
    return (
      <Switch>
        <Route path="/login" component={ LoginPage } />
        <Redirect to="/login" />
      </Switch>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: selectCurrentUser(state)
  }
}

export default connect(mapStateToProps)(App);
