import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import PageContainer from '../../../../@jumbo/components/PageComponents/layouts/PageContainer';

// import { intranet } from '../../../@fake-db';

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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


// Start Tooltip
const ToBeStyledTooltip = ({ className, ...props }) => (
  <Tooltip {...props} classes={{ tooltip: className }} />
);


// Table
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeigth : 'bold',
    fontSize : 12,

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
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

function createData(noKA, namaKA, kelas, jenisAngkutan, statiunBerangkat, frekuensi, jumlahTepat, perentase, statiunDatangKe, frekuensiKe, jumlahTepatKe, persentaseKe) {
  return {noKA, namaKA, kelas, jenisAngkutan, statiunBerangkat, frekuensi, jumlahTepat, perentase, statiunDatangKe, frekuensiKe, jumlahTepatKe, persentaseKe};
}

const rows = [
  createData(39, 'Argo Parahyangan', 'Ekseskutif', 'Penumpang', 'BD', 10, 9, '90%', 'GMR', 10, 10, '100%'),
  createData(39, 'Argo Parahyangan', 'Ekseskutif', 'Penumpang', 'BD', 10, 9, '90%', 'GMR', 10, 10, '100%'),
  createData(39, 'Argo Parahyangan', 'Ekseskutif', 'Penumpang', 'BD', 10, 9, '90%', 'GMR', 10, 10, '100%'),
  createData(39, 'Argo Parahyangan', 'Ekseskutif', 'Penumpang', 'BD', 10, 9, '90%', 'GMR', 10, 10, '100%'),
  createData(39, 'Argo Parahyangan', 'Ekseskutif', 'Penumpang', 'BD', 10, 9, '90%', 'GMR', 10, 10, '100%'),
  createData(39, 'Argo Parahyangan', 'Ekseskutif', 'Penumpang', 'BD', 10, 9, '90%', 'GMR', 10, 10, '100%'),
];


// Modals
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 580,
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
  { label: 'Daftar Frekuensi - Ketepatan KA Datang', isActive: true },
];

  
const KetepantanKADatang= () => {
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
    <PageContainer heading="Daftar Frekuensi - Ketepatan KA Datang" breadcrumbs={breadcrumbs}>
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
            Filter
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='container-filter'>
              <div className='filter'>
                <div className='section-filter'>
                  <form>
                    <label>Tanggal Awal</label>
                    <input placeholder='10-10-2022' icon={<DownloadIcon />}/>
                  </form>
                  <form>
                    <label>Tanggal Akhir</label>
                    <input placeholder='10-10-2022' icon={<DownloadIcon />}/>
                  </form>
                  <form>
                    <label>Rentan Waktu</label>
                    <input placeholder='10-10-2022' icon={<DownloadIcon />}/>
                  </form>
                </div>

                <div className='section-filter'>
                  <form>
                    <label>Stasiun</label>
                    <input placeholder='GMR' icon={<DownloadIcon />}/>
                  </form>
                  <form>
                    <label>Jenis Angkutan</label>
                    <input placeholder='Semua' icon={<DownloadIcon />}/>
                  </form>
                  <form>
                    <label>Kelas</label>
                    <input placeholder='Eksekutif' icon={<DownloadIcon />}/>
                  </form>
                </div>

                <div className='section-filter'>
                  <form>
                    <label>Area</label>
                    <input placeholder='DAOP - 1' icon={<DownloadIcon />}/>
                  </form>
                </div>

              </div>
            </div>

            <div className='button-modal'>
              <Button variant='outlined' color='success'>Batal</Button>
              <Button variant="contained" color='success'>Submit</Button>
            </div>
          </Typography>
        </Box>
      </Modal>
      
      <div className='information'>
          <div className='header-title'>
            <p>FREKUENSI KA TEPAT</p>
          </div>
          <div className='container-informasi'>

            <div className='section-informasi'>
                <div className='title-information'>
                  <p>Tanggal Awal</p>
                  <span>: 21 Desember 2022</span>
                </div>
                <div className='title-information'>
                  <p>Tanggal Akhir</p>
                  <span>: 21 Desember 2022</span>
                </div>
            </div>

            <div className='section-informasi'>
                <div className='title-information'>
                  <p>KA Berangkat Tepat</p>
                  <span>: 21 Desember 2022</span>
                </div>
                <div className='title-information'>
                  <p>KA Datang Tepat</p>
                  <span>: 21</span>
                </div>
            </div>

            <div className='section-informasi'>
                <div className='title-information'>
                  <p>Total KA Berangkat</p>
                  <span>: 21</span>
                </div>
                <div className='title-information'>
                  <p>Total KA Datang</p>
                  <span>: 21</span>
                </div>
            </div>

          </div>
      </div>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" className='table'>
        <TableHead>
          <TableRow >
            <StyledTableCell style={{fontWeight : 'bold'}} rowSpan={2} align="center">No. KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} rowSpan={2} align="center">Nama KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} rowSpan={2} align="center">Kelas</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} rowSpan={2} align="center">Jenis Angkutan</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="center" colSpan={4}>Keberangkatan</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="center" colSpan={4}>Kedatangan</StyledTableCell>
          </TableRow>
          <TableRow>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Stasiun Berangkat</StyledTableCell>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Frekuensi</StyledTableCell>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Jumlah Tepat</StyledTableCell>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Presentase</StyledTableCell>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Stasiun Berangkat</StyledTableCell>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Frekuensi</StyledTableCell>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Jumlah Tepat</StyledTableCell>
          <StyledTableCell style={{fontWeight : 'bold'}} align="center">Presentase</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} >
              <StyledTableCell component="th" scope="row">{row.noKA}</StyledTableCell>
              <StyledTableCell align="left">{row.namaKA}</StyledTableCell>
              <StyledTableCell align="left">{row.kelas}</StyledTableCell>
              <StyledTableCell align="left">{row.jenisAngkutan}</StyledTableCell>
              <StyledTableCell align="left">{row.statiunBerangkat}</StyledTableCell>
              <StyledTableCell align="left">{row.frekuensi}</StyledTableCell>
              <StyledTableCell align="left">{row.jumlahTepat}</StyledTableCell>
              <StyledTableCell align="left">{row.perentase}</StyledTableCell>
              <StyledTableCell align="left">{row.statiunDatangKe}</StyledTableCell>
              <StyledTableCell align="left">{row.frekuensiKe}</StyledTableCell>
              <StyledTableCell align="left">{row.jumlahTepatKe}</StyledTableCell>
              <StyledTableCell align="left">{row.persentaseKe}</StyledTableCell>
        </StyledTableRow>
      ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination component="div" count={100} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage}/>
    </PageContainer>
  );
};

export default KetepantanKADatang;
