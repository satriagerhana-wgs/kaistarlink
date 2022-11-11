import IntlMessages from '../../../utils/IntlMessages';
import {
  // AccountCircle,
  ArrowForward,
  // Category,
  // Chat,
  // CheckCircle,
  // Colorize,
  // ContactMail,
  // Contacts,
  // Edit,
  // EditAttributes,
  // Email,
  Error,
  // Event,
  // InsertChart,
  // LockOutlined,
  // Map,
  Sort,
  // Pages,
  // People,
  ShowChart,
  // Timeline,
  // Widgets,
} from '@material-ui/icons';
import React from 'react';

const dashboardsMenus = [
  {
    name: <IntlMessages id={'GAPEKA'} />,
    icon: <Sort />,
    type: 'item',
    link: '/dashboard/gapeka',
  },
  {
    name: <IntlMessages id={'GAPEKA Realisasi'} />,
    icon: <Sort />,
    type: 'item',
    link: '/dashboard/gapekarealisasi',
  },
  {
    name: <IntlMessages id={'Update Perka'} />,
    icon: <Sort />,
    type: 'item',
    link: '/dashboard/updateperka',
  },
  {
    name: <IntlMessages id={'Evaluasi Perka'} />,
    icon: <Sort />,
    type: 'item',
    link: '/dashboard/evaluasiperka',
  },
];

const perkaMenus = {
  name: <IntlMessages id={'sidebar.perka'} />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.bentuk103'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/perka/bentuk103',
    },
    {
      name: <IntlMessages id={'sidebar.bentuk103a'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/perka/bentuk103a',
    },
    {
      name: <IntlMessages id={'sidebar.bentuk103b'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/perka/bentuk103b',
    },
    {
      name: <IntlMessages id={'sidebar.tiketGangguan'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/perka/tiketGangguan',
    },
  ],
};

const masterMenus = {
  name: <IntlMessages id={'sidebar.masterdata'} />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.direktorat'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/masterdata/direktorat',
    },
    {
      name: <IntlMessages id={'sidebar.unitdirektorat'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/masterdata/unitdirektorat',
    },
    {
      name: <IntlMessages id={'sidebar.penyebab'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/masterdata/penyebab',
    },
    {
      name: <IntlMessages id={'sidebar.akibat'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/masterdata/akibat',
    },
    {
      name: <IntlMessages id={'sidebar.kategoriinstruksi'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/masterdata/kategoriinstruksi',
    },
    
  ],
};

// const frekuensiMenus = {
//   name: <IntlMessages id={'sidebar.daftarfrekuensi'} />,
//   type: 'collapse',
//   children: [
//     // {
//     //   name: <IntlMessages id={'sidebar.kajalan'} />,
//     //   icon: <ArrowForward />,
//     //   type: 'item',
//     //   link: '/daftarfrekuensi/kajalan',
//     // },
//     // {
//     //   name: <IntlMessages id={'sidebar.ketepatankadatang'} />,
//     //   icon: <ArrowForward />,
//     //   type: 'item',
//     //   link: '/daftarfrekuensi/ketepatankadatang',
//     // },
//     // {
//     //   name: <IntlMessages id={'sidebar.kelambatanka'} />,
//     //   icon: <ArrowForward />,
//     //   type: 'item',
//     //   link: '/daftarfrekuensi/kelambatanka',
//     // },
//     // {
//     //   name: <IntlMessages id={'sidebar.daftardndilkelambatan'} />,
//     //   icon: <ArrowForward />,
//     //   type: 'item',
//     //   link: '/daftarfrekuensi/daftardndilkelambatan',
//     // },
//     // {
//     //   name: <IntlMessages id={'sidebar.kaberangkatperwilayah'} />,
//     //   icon: <ArrowForward />,
//     //   type: 'item',
//     //   link: '/daftarfrekuensi/kaberangkatperwilayah',
//     // },
//     // {
//     //   name: <IntlMessages id={'sidebar.laporanrealisasi'} />,
//     //   icon: <ArrowForward />,
//     //   type: 'item',
//     //   link: '/daftarfrekuensi/laporanrealisasi',
//     // },

//   ],
// };

const laporanMenu = {
  name: <IntlMessages id={'sidebar.laporan'} />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.daftarfrekuensi'} />,
      type: 'collapse',
      children: [
        {
          name: <IntlMessages id={'sidebar.kajalan'} />,
          icon: <ArrowForward />,
          type: 'item',
          link: '/laporan/daftarfrekuensi/kajalan',
        },
        {
          name: <IntlMessages id={'sidebar.ketepatankadatang'} />,
          icon: <ArrowForward />,
          type: 'item',
          link: '/laporan/daftarfrekuensi/ketepatankadatang',
        },
        {
          name: <IntlMessages id={'sidebar.kelambatanka'} />,
          icon: <ArrowForward />,
          type: 'item',
          link: '/laporan/daftarfrekuensi/kelambatanka',
        },

      ],
    },
    {
      name: <IntlMessages id={'sidebar.daftardndilkelambatan'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/laporan/daftardndilkelambatan',
    },
    {
      name: <IntlMessages id={'sidebar.kaberangkatperwilayah'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/laporan/kaberangkatperwilayah',
    },
    {
      name: <IntlMessages id={'sidebar.laporanrealisasi'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/laporan/laporanrealisasi',
    },
  ],
};


const errorPagesMenus = {
  name: <IntlMessages id={'sidebar.appModule.error'} />,
  icon: <Error />,
  type: 'collapse',
  children: [
    {
      name: <IntlMessages id={'sidebar.extraPages.404'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/error-404',
    },
    {
      name: <IntlMessages id={'sidebar.extraPages.500'} />,
      icon: <ArrowForward />,
      type: 'item',
      link: '/extra-pages/error-500',
    },
  ],
};


export const sidebarNavs = [
  {
    name: <IntlMessages id={'sidebar.dashboards'} />,
    type: 'section',
    children: dashboardsMenus,
  },
  {
    name: <IntlMessages id={'sidebar.components'} />,
    type: 'section',
    children: [perkaMenus, masterMenus, laporanMenu],
  },
  
];
