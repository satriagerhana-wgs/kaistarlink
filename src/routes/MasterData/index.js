import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const MasterData = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/masterdata`} />
        <Route path={`${requestedUrl}/direktorat`} component={lazy(() => import('./Direktorat'))} />
        <Route path={`${requestedUrl}/unitdirektorat`} component={lazy(() => import('./UnitDirektorat'))} />
        <Route path={`${requestedUrl}/penyebab`} component={lazy(() => import('./Penyebab'))} />
        <Route path={`${requestedUrl}/akibat`} component={lazy(() => import('./Akibat'))} />
        <Route path={`${requestedUrl}/kategoriinstruksi`} component={lazy(() => import('./KategoriInstruksi'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default MasterData;
