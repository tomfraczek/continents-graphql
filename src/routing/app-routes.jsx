import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Continents from '../pages/continents/continents.container';
import Continent from '../pages/continent/continent.component';
import Homepage from '../pages/homepage/homepage.component';
import Header from '../components/header/header.component';

import { RouteUrl } from './route-url';

// import { AppContainer } from './app-routes.styles'

export const AppRoutes = () => (
    <>
      <Header />
      <Switch>
        <Route path={RouteUrl.home} exact component={Homepage} />
        <Route path={RouteUrl.continents} exact component={Continents} />
        <Route path={RouteUrl.continent} exact component={Continent} />
        <Redirect to={RouteUrl.home} />
      </Switch>
    </>
);

// <Route exact path={`${match.path}`} component={MoviesOverview}/>
// <Route path={`${match.path}/:movieId`} component={MoviePage}/>