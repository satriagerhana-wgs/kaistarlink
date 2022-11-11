import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const PengendalianPerka = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/pengendalianPerka`} />
        <Route path={`${requestedUrl}/bentuk103`} component={lazy(() => import('./Bentuk103'))} />
        <Route path={`${requestedUrl}/bentuk103a`} component={lazy(() => import('./Bentuk103a'))} />
        <Route path={`${requestedUrl}/bentuk103b`} component={lazy(() => import('./Bentuk103b'))} />
        <Route path={`${requestedUrl}/tiketGangguan`} component={lazy(() => import('./TiketGangguan'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default PengendalianPerka;
