import React from 'react';
import { Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';

const routes = () => {
  return (
    <>
      <Route exact path="/login" render={() => <LoginPage />} />
    </>
  );
};

export default routes;
