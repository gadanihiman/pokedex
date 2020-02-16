import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../containers/Home';
import Profile from '../containers/Profile';
import DetailPage from '../containers/DetailPage';

export default () => {
  return (
    <Switch>
      <Route path="/pokemon/:id">
        <DetailPage />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
