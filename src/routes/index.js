import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Dashboards from './Dashboards';
import Components from './Components';
import Apps from './Apps';
import Extensions from './Extensions';
import Charts from './Charts';
import Maps from './Maps';
import Widgets from './Widgets';
import Metrics from './Metrics';
import Login from './Auth/Login';
import Signup from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ExtraPages from './ExtraPages';
import TourGuide from './TourGuide';
import CustomTimelines from './views/CustomTimelines';
import MaterialTimelines from './views/MaterialTimelines';
import Calendar from './modules/Calendar';
import UsersModule from './modules/Users';
import PengendalianPerka from './PengendalianPerka';
import MasterData from './MasterData';
import DaftarFrekuensi from './Laporan/DaftarFrekuensi';
import Laporan from './Laporan';
// import LayoutBuilder from './LayoutBuilder';

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);
  const location = useLocation();

  if (location.pathname === '' || location.pathname === '/') {
    return <Redirect to={'/dashboard'} />;
  } else if (authUser && location.pathname === '/signin') {
    return <Redirect to={'/dashboard'} />;
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard" component={Dashboards} />
        <Route path="/perka" component={PengendalianPerka} />
        <Route path="/masterdata" component={MasterData} />
        {/* <Route path="/daftarfrekuensi" component={DaftarFrekuensi} /> */}
        <Route path="/laporan" component={Laporan} />
        
        {/* <Route path="/layout-builder" component={LayoutBuilder} /> */}
      </Switch>

      {location.pathname !== '/signin' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && (
        <TourGuide />
      )}
    </React.Fragment>
  );
};

export default Routes;
