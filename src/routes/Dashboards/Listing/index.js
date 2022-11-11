import React from 'react'
// import { Grid } from '@material-ui/core';
// import CurrentPlan from './CurrentPlan';
// import DealsAnalytics from './DealsAnalytics';
// import PopularAgents from './PopularAgents';
// import PropertiesListing from './PropertiesListing';
// import PropertiesStatistics from './PropertiesStatistics';
// import QueriesStatistics from './QueriesStatistics';
// import RecentActivities from './RecentActivities';
// import VisitsStatistics from './VisitsStatistics';
// import makeStyles from '@material-ui/core/styles/makeStyles';
// import Box from '@material-ui/core/Box';
// import CitiesStatistics from './CitiesStatistics';
// import GridContainer from '../../../@jumbo/components/GridContainer';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer'

// const useStyles = makeStyles(theme => ({
//   orderLg2: {
//     [theme.breakpoints.up('lg')]: {
//       order: 2,
//     },
//   },
//   orderLg1: {
//     [theme.breakpoints.up('lg')]: {
//       order: 1,
//     },
//   },
// }));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'GAPEKA Realisasi', isActive: true }
]

const ListingDashboard = () => {
  // const classes = useStyles();
  return (
    <PageContainer heading="GAPEKA Realisasi" breadcrumbs={breadcrumbs}>
      sdasd
    </PageContainer>
  )
}

export default ListingDashboard;
