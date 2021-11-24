import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ModalWindow from './ModalWindow';
import NotFound from './NotFound';

const Main = () => (
  <Fragment>
    <Header />
    <Switch>
      <Route path="/search/:searchQuery" component={MainContent} />
      <Route path="/search" component={MainContent} />
      {/* <Route exact path="/" render={() => (<Redirect to="/search" />)} /> */}
      <Route path="*" component={NotFound} />
    </Switch>
    <Footer />
    <ModalWindow />
  </Fragment>
);

export default Main;
