import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

// import { intranet } from '../../../@fake-db';

const useStyles = makeStyles(theme => ({
  pageFull: {
    width: '100%',
    '& .page-header': {
      position: 'relative',
      zIndex: 3,
      '& .title, & .bread-crumbs, & .bread-crumbs a, & .bread-crumbs .MuiTypography-colorTextPrimary': {
        color: theme.palette.common.white,
      },
    },
  },
  userPhotosRoot: {
    '& .scrollbar-container': {
      height: '272px !important',
    },
  },
}));

const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: 'Penyebab', isActive: true },
];

const Penyebab= () => {
  const classes = useStyles();

  return (
    <PageContainer heading="Penyebab" breadcrumbs={breadcrumbs}>
      
    </PageContainer>
  );
};

export default Penyebab;
