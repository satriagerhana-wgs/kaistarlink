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

function createData(kodefikasi, namaPenyebab, jumlahFrekuensi, jumlahKA, jumlahAndil, Aksi) {
  return {kodefikasi, namaPenyebab, jumlahFrekuensi, jumlahKA, jumlahAndil, Aksi};
}

const rows = [
  createData(3, 'KA TERTEMPER ORANG', 1, 1, 7, ''),
  createData(7, 'TUNGGU RANGKAIAN', 8, 8, 117, ''),
  createData(1001, 'LONGSOR,/GOGOS/AMBLES', 26, 26, 284, ''),
  createData(1009, 'RODA SLIP AKIBAT HUJAN', 40, 40, 1129, ''),
  createData(2022, 'PEMASANGAN TASPAT IMBAS PEKERJAAN SATKER', 1, 1, 2740, ''),
  createData(11010, 'BLB NAIK/TURUN PENUMPANG', 8, 8, 25, ''),
];

function createDataModals(no, noKA, namaKA, jumlahFrekuensi, andil, aksi) {
  return {no, noKA, namaKA, jumlahFrekuensi, andil, aksi};
}

const rowModals = [
  createDataModals(1, 39,'Argo Parahyangan', 1, 15, ''),
  createDataModals(2, '47A','Argo Parahyangan', 2, 19, ''),
  createDataModals(3, '53B','Argo Parahyangan Excellence', 1, 20, ''),
  createDataModals(4, '6C','Argo Wilis', 1, 10, ''),
  createDataModals(5, '7047B', 'Cikuray', 1, 13, ''),
  createDataModals(6, 'BD-CKPPLB120U1', 'Malabar', 1, 20, ''),
];


function createDetailModals(no, penyebab, akibat, daop, lokasi1, lokasi2, km, andil, keterangan, nomorTiket) {
  return {no, penyebab, akibat, daop, lokasi1, lokasi2, km, andil, keterangan, nomorTiket};
}

const rowDetailKA = [
  createDetailModals(1, 'TUNGGU RANGKAIAN (ALAM DAN EKSTERNALITAS', 'LAMBAT DI STATIUN AWAL', 2, '-', 'Bandung', '-', 10, 'TTG RANGKAIAN DARI PLB3 38A', 'A123'),
  createDetailModals(2, 'TUNGGU RANGKAIAN (ALAM DAN EKSTERNALITAS', 'LAMBAT DI STATIUN AWAL', 2, '-', 'Bandung', '-', 9, 'TTG RANGKAIAN DARI PLB3 38A', 'A123'), 
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
  { label: 'Daftar Andil Kelambatan', isActive: true },
];

  
const DaftarAndilKelambatan = () => {
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
              <Button variant='outline'>Batal</Button>
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
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Kodefikasi</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Nama Penyebab</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Jumlah Frekuensi</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Jumlah KA</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Total Andil</StyledTableCell>
            <StyledTableCell style={{fontWeight : 'bold'}} align="left">Aksi</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name} >
              <StyledTableCell component="th" scope="row">{row.kodefikasi}</StyledTableCell>
              <StyledTableCell align="left">{row.namaPenyebab}</StyledTableCell>
              <StyledTableCell align="left">{row.jumlahFrekuensi}</StyledTableCell>
              <StyledTableCell align="left">{row.jumlahKA}</StyledTableCell>
              <StyledTableCell align="left">{row.jumlahAndil}</StyledTableCell>
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
                <Button variant="contained" color="success" startIcon={<DownloadIcon />}>Download</Button>
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
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">No</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">No.KA</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Nama KA</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold', color:'red'}} align="left" >Jumlah frekuensi</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Andil</StyledTableCell>
                      <StyledTableCell style={{fontWeight : 'bold'}} align="left">Aksi</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rowModals.map((row) => (
                      <StyledTableRow key={row.name} >
                        <StyledTableCell component="th" scope="row">{row.no}</StyledTableCell>
                        <StyledTableCell align="left">{row.noKA}</StyledTableCell>
                        <StyledTableCell align="left">{row.namaKA}</StyledTableCell>
                        <StyledTableCell align="left">{row.jumlahFrekuensi}</StyledTableCell>
                        <StyledTableCell align="left">{row.andil}</StyledTableCell>
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
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">No.</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Penyebab</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Akibat</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">DAOP</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Lokasi</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Lokasi</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">KM</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Andil</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Keterangan</StyledTableCell>
                                          <StyledTableCell style={{fontWeight : 'bold'}} align="left">Nomor Tiket</StyledTableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {rowDetailKA.map((row) => (
                                          <StyledTableRow key={row.name} >
                                            <StyledTableCell component="th" scope="row">{row.no}</StyledTableCell>
                                            <StyledTableCell align="left">{row.penyebab}</StyledTableCell>
                                            <StyledTableCell align="left">{row.akibat}</StyledTableCell>
                                            <StyledTableCell align="left">{row.daop}</StyledTableCell>
                                            <StyledTableCell align="left">{row.lokasi1}</StyledTableCell>
                                            <StyledTableCell align="left">{row.lokasi2}</StyledTableCell>
                                            <StyledTableCell align="left">{row.km}</StyledTableCell>
                                            <StyledTableCell align="left">{row.andil}</StyledTableCell>
                                            <StyledTableCell align="left">{row.keterangan}</StyledTableCell>
                                            <StyledTableCell align="left">{row.nomorTiket}</StyledTableCell>
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

export default DaftarAndilKelambatan ;
