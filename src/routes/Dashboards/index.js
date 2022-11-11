import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Dashboards = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/gapeka`} />
        <Route path={`${requestedUrl}/gapeka`} component={lazy(() => import('./Gapeka'))} />
        <Route path={`${requestedUrl}/gapekarealisasi`} component={lazy(() => import('./GapekaRealisasi'))} />
        <Route path={`${requestedUrl}/updateperka`} component={lazy(() => import('./UpdatePerka'))} />
        <Route path={`${requestedUrl}/evaluasiperka`} component={lazy(() => import('./EvaluasiPerka'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Dashboards;
