import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

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
import VisibilityIcon from '@mui/icons-material/Visibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Icon, IconButton } from '@material-ui/core';


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

function createData(wilayah, tanggalAwal, tanggalAkhir, frekuensiKABerangkat, frekuensiKATepat, PresentaseKA, frekuensiKADatang, frekuensiKADatangTepat, presentasiKADatangTepat, Aksi) {
  return {wilayah, tanggalAwal, tanggalAkhir, frekuensiKABerangkat, frekuensiKATepat, PresentaseKA, frekuensiKADatang, frekuensiKADatangTepat, presentasiKADatangTepat, Aksi};
}

const rows = [
  createData('DAOP 1', '21/12/2022', '21/12/2022', 100, 100, '100 %', 120, 115, '98', ''),
  createData('DAOP 2', '21/12/2022', '21/12/2022', 90, 90, '90 %', 120, 8, '117', ''),
  createData('DAOP 3', '21/12/2022', '21/12/2022', 80, 80, '80 %', 80, 26, '248', ''),
  createData('DAOP 4', '21/12/2022', '21/12/2022', 70, 70, '70 %', 100, 45, '1129', ''),
  createData('DAOP 5', '21/12/2022', '21/12/2022', 60, 60, '60 %', 80, 1, '2740', ''),
  createData('DAOP 6', '21/12/2022', '21/12/2022', 50, 50, '50 %', 100, 8, '25', ''),
];

function createDataModals(statsiun, tanggalAwal, tanggalAkhir, frekuensiKABerangkat, frekuensiKABerangkatTepat, presentasiKABerangkatTepat, frekuensiKADatang, frekuensiKADatangTepat, presentaseKADatangTepat, Aksi) {
  return {statsiun, tanggalAwal, tanggalAkhir, frekuensiKABerangkat, frekuensiKABerangkatTepat, presentasiKABerangkatTepat, frekuensiKADatang, frekuensiKADatangTepat, presentaseKADatangTepat, Aksi};
}

const rowModals = [
  createDataModals('Stasiun A', '-', '-', 100, 95, '95,00%', 120, 115,'96%', ''),
  createDataModals('Stasiun A', '-', '-', 100, 95, '95,00%', 120, 115,'96%', ''),
  createDataModals('Stasiun A', '-', '-', 100, 95, '95,00%', 120, 115,'96%', ''),
  createDataModals('Stasiun A', '-', '-', 100, 95, '95,00%', 120, 115,'96%', ''),
  createDataModals('Stasiun A', '-', '-', 100, 95, '95,00%', 120, 115,'96%', ''),
];


function createDetailModals(noKA, namaKA, tanggalAwal, tanggalAkhir, frekuensiKABerangkat, frekuensiKABerangkatTepat, presentasiKABerangkatTepat, frekuensiKADatang, frekuensiKADatangTepat, presentaseKADatangTepat) {
  return {noKA, namaKA, tanggalAwal, tanggalAkhir, frekuensiKABerangkat, frekuensiKABerangkatTepat, presentasiKABerangkatTepat, frekuensiKADatang, frekuensiKADatangTepat, presentaseKADatangTepat};
}

const rowDetailKA = [
  createDetailModals(1, 'KA-1', '-', '-', 100, 95, '95,00%', 120, 115,'96%'),
];




// Modals
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const detail = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const modalDetail = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
  { label: 'Daftar Kelambatan KA', isActive: true },
];

  
const KaBerangkatPerWilayah = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [buka, setBuka] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const detailOpen = () => setBuka(true);
  const detailClose = () => setBuka(false);

  const modalDuaOpen = () => setModalOpen(true);
  const modalDuaClose = () => setModalOpen(false);

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
    <PageContainer heading="Daftar Andil Kelambatan" breadcrumbs={breadcrumbs}>
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
            <div className='lineModals'></div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='container-filter'>
              <div className='filter'>
                <div className='section-filter'>
                  <form>
                    <label>Tanggal Awal</label>
                    <input placeholder='1000' icon={<DownloadIcon />} style={{width:'210px'}}/>
                  </form>
                  <form>
                    <label>Tanggal Akhir</label>
                    <input placeholder='1000' icon={<DownloadIcon />} style={{width:'210px'}}/>
                  </form>
                </div>

                <div className='section-filter'>
                  <form>
                    <label>DAOP</label>
                    <input placeholder='-' icon={<DownloadIcon />} style={{width:'430px'}}/>
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
          {/* <div className='header-title'>
            <p>FREKUENSI KA TEPAT</p>
          </div> */}
          <div className='container-informasi'>

            <div className='section-informasi'>
                <div className='title-information'>
                  <p>Total Gangguna</p>
                  <span>: 89</span>
                </div>
                <div className='title-information'>
                  <p>Total KA Terganggu</p>
                  <span>: 95</span>
                </div>
            </div>

            <div className='section-informasi'>
                <div className='title-information'>
                  <p>Total Andil (Menit)</p>
                  <span>: 4032</span>
                </div>
                <div className='title-information'>
                  <p>Tanggal Awal</p>
                  <span>: 21 Desember 2022</span>
                </div>
            </div>

            <div className='section-informasi'>
                <div className='title-information'>
                  <p>Tanggal Akhir</p>
                  <span>: 21 Desember</span>
                </div>
            </div>

          </div>
      </div>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table" className='table'>
        <TableHead>
          <TableRow >
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Wilayah</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal Awal</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal Akhir</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Berangkat</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Berangkat Tepat</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Presentase KA Berangkat Tepat</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Datang</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Datang Tepat</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Presentase KA Datang Tepat</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Aksi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} >
              <StyledTableCell component="th" scope="row">{row.wilayah}</StyledTableCell>
              <StyledTableCell align="left">{row.tanggalAwal}</StyledTableCell>
              <StyledTableCell align="left">{row.tanggalAkhir}</StyledTableCell>
              <StyledTableCell align="left">{row.frekuensiKABerangkat}</StyledTableCell>
              <StyledTableCell align="left">{row.frekuensiKATepat}</StyledTableCell>
              <StyledTableCell align="left">{row.PresentaseKA}</StyledTableCell>
              <StyledTableCell align="left">{row.frekuensiKADatang}</StyledTableCell>
              <StyledTableCell align="left">{row.frekuensiKADatangTepat}</StyledTableCell>
              <StyledTableCell align="left">{row.presentasiKADatangTepat}</StyledTableCell>
              <StyledTableCell align="left"><VisibilityIcon className='detail'  onClick={detailOpen}/></StyledTableCell>
        </StyledTableRow>
      ))}
        </TableBody>
      </Table>
    </TableContainer>

      <Modal
          open={buka}
          onClose={detailClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={detail}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                <Button variant="contained" color="success" startIcon={<DownloadIcon />}>Download Dokument</Button>
                <div className='lineModals'></div>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            
            <div className='container-informasi-modals'>

                <div className='section-informasi'>
                    <div className='title-information'>
                      <p>Wilayah</p>
                      <span>: DAOP 1</span>
                    </div>
                    <div className='title-information'>
                      <p>Periode</p>
                      <span>: 21-12-2022 s/d 23-12-2022 </span>
                    </div>
                </div>
              </div>

            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 700 }} aria-label="customized table" className='table'>
                  <TableHead>
                    <TableRow >
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Statsiun</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal Awal</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal Akhir</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Berangkat</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Berangkat Tepat</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Presentase KA Berangkat Tepat</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Datang</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Datang Tepat</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Presentase KA Datang Tepat</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Aksi</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowModals.map((row) => (
                      <StyledTableRow key={row.name} >
                        <StyledTableCell component="th" scope="row">{row.statsiun}</StyledTableCell>
                        <StyledTableCell align="left">{row.tanggalAwal}</StyledTableCell>
                        <StyledTableCell align="left">{row.tanggalAkhir}</StyledTableCell>
                        <StyledTableCell align="left">{row.frekuensiKABerangkat}</StyledTableCell>
                        <StyledTableCell align="left">{row.frekuensiKABerangkatTepat}</StyledTableCell>
                        <StyledTableCell align="left">{row.presentasiKABerangkatTepat}</StyledTableCell>
                        <StyledTableCell align="left">{row.frekuensiKADatang}</StyledTableCell>
                        <StyledTableCell align="left">{row.frekuensiKADatangTepat}</StyledTableCell>
                        <StyledTableCell align="left">{row.presentaseKADatangTepat}</StyledTableCell>
                        <StyledTableCell align="left"><VisibilityIcon className='detail'  onClick={modalDuaOpen}/>
                        <Modal
                          open={modalOpen}
                          onClose={modalDuaClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={modalDetail}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              Detail Nomor KA 47A
                              <div className='lineModals'></div>
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className='container-informasi-modals'>
                                  <div className='section-informasi'>
                                      <div className='title-information'>
                                        <p>Total Gangguna</p>
                                        <span>: 89</span>
                                      </div>
                                      <div className='title-information'>
                                        <p>Total KA Terganggu</p>
                                        <span>: 95</span>
                                      </div>
                                  </div>

                                  <div className='section-informasi'>
                                      <div className='title-information'>
                                        <p>Total Andil (Menit)</p>
                                        <span>: 4032</span>
                                      </div>
                                      <div className='title-information'>
                                        <p>Tanggal Awal</p>
                                        <span>: 21 Desember 2022</span>
                                      </div>
                                  </div>
                                </div>

                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 700 }} aria-label="customized table" className='table'>
                                      <TableHead>
                                        <TableRow >
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">No. KA.</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Nama KA</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal Awal</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Tanggal Akhir</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Berangkat </StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Berangkat Tepat</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Presentase KA Berangkat Tepat</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Datang</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Frekuensi KA Datang Tepat</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Presentase KA Datang Tepat</StyledTableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {rowDetailKA.map((row) => (
                                          <StyledTableRow key={row.name} >
                                            <StyledTableCell component="th" scope="row">{row.noKA}</StyledTableCell>
                                            <StyledTableCell align="left">{row.namaKA}</StyledTableCell>
                                            <StyledTableCell align="left">{row.tanggalAwal}</StyledTableCell>
                                            <StyledTableCell align="left">{row.tanggalAkhir}</StyledTableCell>
                                            <StyledTableCell align="left">{row.frekuensiKABerangkat}</StyledTableCell>
                                            <StyledTableCell align="left">{row.frekuensiKABerangkatTepat}</StyledTableCell>
                                            <StyledTableCell align="left">{row.presentasiKABerangkatTepat}</StyledTableCell>
                                            <StyledTableCell align="left">{row.frekuensiKADatang}</StyledTableCell>
                                            <StyledTableCell align="left">{row.frekuensiKADatangTepat}</StyledTableCell>
                                            <StyledTableCell align="left">{row.presentaseKADatangTepat}</StyledTableCell>
                                      </StyledTableRow>
                                    ))}
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                          
                              <div className='button-modal'>
                                <Button variant="outlined" color='success'>Kembali</Button>
                              </div>
                            </Typography>
                          </Box>
                        </Modal>

                        </StyledTableCell>


                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Typography>
          </Box>
        </Modal>
    <TablePagination component="div" count={100} page={page} onPageChange={handleChangePage} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleChangeRowsPerPage}/>
    

    </PageContainer>
  );
};

export default KaBerangkatPerWilayah;




