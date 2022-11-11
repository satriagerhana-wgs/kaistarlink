import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';

import './styles.css'
import DownloadIcon from '@mui/icons-material/Download';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import { styled, createTheme, ThemeProvider  } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TablePagination from '@mui/material/TablePagination';


// Start Tooltip
const ToBeStyledTooltip = ({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} />
);


// Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeigth : 'bold',
    fontSize : 11,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(no, penerbit, noDokumen, tanggalPublish, noKA, riwayatNoKA, namaKA, kelas, asal, tujuan, status, dasarPengoperasian, kontakKA, tipeKA, totalKMKA, totalXFrekuensi, programSF, realisasiSF, frekuensi, tanggalKA) {
  return { no, penerbit, noDokumen, tanggalPublish, noKA, riwayatNoKA, namaKA, kelas, asal, tujuan, status, dasarPengoperasian, kontakKA, tipeKA, totalKMKA, totalXFrekuensi, programSF, realisasiSF, frekuensi, tanggalKA };
}

const rows = [
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('02', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('03', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('04', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('05', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('06', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('07', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('08', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('09', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
  createData('10', 'KP', 'OTR/213(09/22)', '01/09/22', 16, '16.A, 16.B', 'Argo Cirebon', 'KA ARGO', 'GMR', 'CN', 'Jalan', 'Gapeka / Malka No...', 'Komersil / PSO Jarak Jauh / PSO Jarak Dekat', 'Reguler / Fakultatif / KLB / PLB / Dinas', 1000, 3000, '4K1, 4K2, 1KM, 1KP', '5K1, 3K2, 1KM, 1KP', 30, 'Juli 2022'),
];


// Modals
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

// Use Style
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

// navigasi
const breadcrumbs = [
  // { label: 'Home', link: '/' },
  // { label: 'Dashboard', link: '/dashboard' },
  { label: 'Daftar Frekuensi - KA Jalan', isActive: true },
];

  
const KaJalan= () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    // <PageContainer heading="Daftar Frekuensi - KA Jalan" breadcrumbs={breadcrumbs}>
    <PageContainer heading="Daftar Frekuensi - KA Jalan" breadcrumbs={breadcrumbs}>
      <div className='header-container'>
        <Button variant="contained" color="success" startIcon={<DownloadIcon />}>Unduh Dokument</Button>
        <div className='icon-header'>
          <SearchIcon className='icon-search'/>
          <TuneIcon className='icon-setting' onClick={handleOpen}/>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Filter Tanggal KA
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='container-filter'>
              <div className='filter'>
                <div className='section-filter'>
                  <form>
                    <label>Tanggal Awal</label>
                    <input placeholder='10-10-2022'/>
                  </form>
                  <form>
                    <label>Tanggal Awal</label>
                    <input placeholder='10-10-2022'/>
                  </form>
                </div>

                <div className='section-filter'>
                  <form>
                    <label>Status KA</label>
                    <input placeholder='Jalan'/>
                  </form>
                  <form>
                    <label>Nama KA</label>
                    <input placeholder='Argo Cirebon'/>
                  </form>
                </div>

                <div className='section-filter'>
                  <form>
                    <label>No Dokumen</label>
                    <input placeholder='OTR/213(09/22)'/>
                  </form>
                </div>

              </div>
            </div>

            <div className='button-modal'>
              <Button variant='outline'>Batal</Button>
              <Button variant="contained" color='success'>Submit</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
      
      <div className='information'>
        <div className='title-information'>
          <p>Jumlah KA Jalan</p>
          <span>: KA 001</span>
        </div>
        <div className='title-information'>
          <p>Jumlah WAM Diterbitkan</p>
          <span>: KA Satu</span>
        </div>
      </div>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" className='table'>
        <TableHead>
          <TableRow >
            <StyledTableCell style={{fontWeight : 'bold'}}>No</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Penerbit</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">No Dokumen</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal Publish Dokumen</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">No KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Riwayat No KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Nama KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Kelas</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Asal</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tujuan</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Status</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Dasar Pengoperasian</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Kontrak KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tipe KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Total KM-KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Total KM-KA x Frekuensi</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Program SF</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Realisasi SF</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal KA</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} >
              <StyledTableCell component="th" scope="row">{row.no}</StyledTableCell>
              <StyledTableCell align="left">{row.penerbit}</StyledTableCell>
              <StyledTableCell align="left">{row.noDokumen}</StyledTableCell>
              <StyledTableCell align="left">{row.tanggalPublish}</StyledTableCell>
              <StyledTableCell align="left">{row.noKA}</StyledTableCell>
              <StyledTableCell align="left">{row.riwayatNoKA}</StyledTableCell>
              <StyledTableCell align="left">{row.namaKA}</StyledTableCell>
              <StyledTableCell align="left">{row.kelas}</StyledTableCell>
              <StyledTableCell align="left">{row.asal}</StyledTableCell>
              <StyledTableCell align="left">{row.tujuan}</StyledTableCell>
              <StyledTableCell align="left"><p className='buttonStatus'>{row.status}</p></StyledTableCell>
              <StyledTableCell align="left">{row.dasarPengoperasian}</StyledTableCell>
              <StyledTableCell align="left">{row.kontakKA}</StyledTableCell>
              <StyledTableCell align="left">{row.tipeKA}</StyledTableCell>
              <StyledTableCell align="left">{row.totalKMKA}</StyledTableCell>
              <StyledTableCell align="left">{row.totalXFrekuensi}</StyledTableCell>
              <StyledTableCell align="left">{row.programSF}</StyledTableCell>
              <StyledTableCell align="left">{row.realisasiSF}</StyledTableCell>
              <StyledTableCell align="left">{row.frekuensi}</StyledTableCell>
              <StyledTableCell align="left">
              <Tooltip
        title=" Juli 2022 ------------- 01 04 05 09 12 15 19 20 01 04 05 09 12 15 19 20 01 04 05 09 12 15 19 20 01 04 05 09 12 15 19 20
"
        arrow
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: 'common.black',
              '& .MuiTooltip-arrow': {
                color: 'common.black',
              },
              width : '120px',
              margin : 'auto 10px'
            },
          },
        }}
      >
        <Button>
          <p  className='buttonToolTip' align="left" style={{fontSize : 12, width:60, textTransform:'capitalize'}}>{row.tanggalKA}</p>
        </Button>
        </Tooltip>
        </StyledTableCell>
        </StyledTableRow>
      ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination component="div" count={100} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage}/>
    </PageContainer>
  );
};

export default KaJalan;
