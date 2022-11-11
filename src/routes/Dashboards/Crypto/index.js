import React, {useState} from 'react';
import PageContainer from '../../../@jumbo/components/PageComponents/layouts/PageContainer';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Box, Button, IconButton, Tooltip } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { DatePicker} from "@material-ui/pickers";

import './styles.css'
import { NavLink } from 'react-router-dom';

const StyledTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: theme.palette.common.dark,
    // color: theme.palette.common.white,
    backgroundColor : '#fff',
    fontSize : 12,
    fontWeight : 'bold',
    // border : '1px solid red',
    height: 20,
    width : 10,
    textAlign : 'center',
    paddingLeft : 1,
    padding : 0,
    margin : 0,
  },
  body: {
    fontSize: 12,
    textAlign : 'center',
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(nomor, penertbit, noDokumen, tanggalPublish, noKA, namaKA, kelas, asal, tujuan, status, frekuensi, tanggalKA) {
  return {nomor, penertbit, noDokumen, tanggalPublish, noKA, namaKA, kelas, asal, tujuan, status, frekuensi, tanggalKA};
}

const rows = [
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/2022', 16, 'Argo Cirebon', 'KA Argo', 'GMR', 'CN', 'Jalan', 30, '12/10/2022'),
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/2022', 16, 'Argo Cirebon', 'KA Argo', 'GMR', 'CN', 'Jalan', 30, '12/10/2022'),
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/2022', 16, 'Argo Cirebon', 'KA Argo', 'GMR', 'CN', 'Jalan', 30, '12/10/2022'),
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/2022', 16, 'Argo Cirebon', 'KA Argo', 'GMR', 'CN', 'Jalan', 30, '12/10/2022'),
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/2022', 16, 'Argo Cirebon', 'KA Argo', 'GMR', 'CN', 'Jalan', 30, '12/10/2022'),
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/2022', 16, 'Argo Cirebon', 'KA Argo', 'GMR', 'CN', 'Jalan', 30, '12/10/2022'),
  createData('01', 'KP', 'OTR/213(09/22)', '01/09/2022', 16, 'Argo Cirebon', 'KA Argo', 'GMR', 'CN', 'Jalan', 30, '12/10/2022'),
];


const breadcrumbs = [
  { label: 'Home', link: '/' },
  { label: 'Dashboard', link: '/dashboard' },
  { label: '', isActive: true },
];


const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});



const CryptoDashboard = (props) => {
  const classes = useStyles();
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <PageContainer heading="Daftar Frekuensi KA Jalan" breadcrumbs={breadcrumbs}>
      <div className='button-table'>
       <Button variant="contained" className='buttonTable1'>Filter</Button>
       <Button variant="contained" className='buttonTable1'>Download</Button>
      </div>
      <div className='container-info'>
        <div className='artikel'>
          <div className='jumlahKA'>
           <p><b>Jumlah KA Jalan</b> : 03</p>
          </div>
          <p className='line'>|</p>
          <div className='jumlahWam'>
          <p><b>Jumlah KA Jalan</b> : 03</p>
          </div>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell align="right">Penerbit</StyledTableCell>
              <StyledTableCell align="right">No Dokumen</StyledTableCell>
              <StyledTableCell align="right">Tanggal Publish Dokumen</StyledTableCell>
              <StyledTableCell align="right">No KA</StyledTableCell>
              <StyledTableCell align="right">Nama KA</StyledTableCell>
              <StyledTableCell align="right">Kelas</StyledTableCell>
              <StyledTableCell align="right">Asal</StyledTableCell>
              <StyledTableCell align="right">Tujuan</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Frekuensi</StyledTableCell>
              <StyledTableCell align="right">Tanggal KA</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.nomor}>
                <StyledTableCell component="th" scope="row">
                  {row.nomor}
                </StyledTableCell>
                <StyledTableCell align="right">{row.penertbit}</StyledTableCell>
                <StyledTableCell align="right">{row.noDokumen}</StyledTableCell>
                <StyledTableCell align="right">{row.tanggalPublish}</StyledTableCell>
                <StyledTableCell align="right">{row.noKA}</StyledTableCell>
                <StyledTableCell align="right">{row.namaKA}</StyledTableCell>
                <StyledTableCell align="right">{row.kelas}</StyledTableCell>
                <StyledTableCell align="right">{row.asal}</StyledTableCell>
                <StyledTableCell align="right">{row.tujuan}</StyledTableCell>
                <StyledTableCell align="right"><p className='badge-table'>{row.status}</p></StyledTableCell>
                <StyledTableCell align="right">{row.frekuensi}</StyledTableCell>
                <StyledTableCell align="right"><DatePicker className='tanggal' value={row.tanggalKA} variant='inline'/></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination className='paging' count={10} showFirstButton showLastButton />
    </PageContainer>
  );
};

export default CryptoDashboard;
