import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import PageLoader from '../../@jumbo/components/PageComponents/PageLoader';

const Laporan = ({ match }) => {
  const requestedUrl = match.url.replace(/\/$/, '');

  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Redirect exact from={`${requestedUrl}/`} to={`${requestedUrl}/laporan`} />
        {/* <Route path={`${requestedUrl}/kajalan`} component={lazy(() => import('./KaJalan'))} />
        <Route path={`${requestedUrl}/ketepatankadatang`} component={lazy(() => import('./KetepantanKADatang'))} /> */}
        <Route path={`${requestedUrl}/daftarfrekuensi`} component={lazy(() => import('./DaftarFrekuensi'))} />
        <Route path={`${requestedUrl}/daftardndilkelambatan`} component={lazy(() => import('./DaftarAndilKelambatan'))} />
        <Route path={`${requestedUrl}/kaberangkatperwilayah`} component={lazy(() => import('./KaBerangkatPerWilayah'))} />
        <Route path={`${requestedUrl}/LaporanRealisasi`} component={lazy(() => import('./LaporanRealisasi'))} />
        <Route component={lazy(() => import('../ExtraPages/404'))} />
      </Switch>
    </Suspense>
  );
};

export default Laporan;
