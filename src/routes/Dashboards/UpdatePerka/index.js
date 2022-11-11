import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';
import logo from './logo-kai.png'

import './styles.css'

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
  { label: 'Update Perka', isActive: true },
];

const UpdatePerka= () => {
  const classes = useStyles();

  return (
    <PageContainer heading="Update Perka" breadcrumbs={breadcrumbs}>
        <div className='starlink'>
            <img className='logo' src={logo} alt="Logo" />
            <h1>Starlink - PT KERETA API INDONESIA PERSERO</h1>
        </div>
    </PageContainer>
  );
};

export default UpdatePerka;
