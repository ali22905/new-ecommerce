
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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



function createData(id, firstName, lastName, phone, email, address, Admin, ) {
  return { id, firstName, lastName, phone, email, address , Admin,  };
}



let theId = 0
const rows = [
  createData(theId, 'John', 'Doe', '1234567890', 'john@example.com', '123 Main St', 'Yes'),
  createData(theId, 'Jane', 'Smith', '9876543210', 'jane@example.com', '456 Elm St', 'No'),
  createData(theId, 'Michael', 'Johnson', '5551234567', 'michael@example.com', '789 Oak St', 'Yes'),
  createData(theId, 'Emily', 'Williams', '2223334444', 'emily@example.com', '567 Pine St', 'No'),
  createData(theId, 'David', 'Brown', '7778889999', 'david@example.com', '890 Maple St', 'Yes'),
  createData(theId, 'Olivia', 'Davis', '4445556666', 'olivia@example.com', '234 Cedar St', 'No'),
  createData(theId, 'Sophia', 'Wilson', '6667548888', 'sophia@example.com', '678 Birch St', 'Yes'),
];




const UserList = () => {
  return (
    <div className="product-list-container">
    <div className='deleteAllDiv'><Button variant="contained" sx={{backgroundColor: '#000 ', '&:hover': {backgroundColor: "rgba(0, 0, 0, 0.8) "}}}>Delete All &nbsp; <DeleteIcon fontSize='small' sx={{color:'#fff'}} /></Button></div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell sx={{fontWeight: 'bold'}} align='left'>id</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">firstName</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">lastName</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">phone</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">email</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">address</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Admin</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight: 'bold'}}>
                {row.id + index + 1}
              </TableCell>
              <StyledTableCell component="th" align="right" scope="row" sx={{fontWeight:'bold'}}>  {row.firstName}</StyledTableCell>
              <StyledTableCell align="right" sx={{fontWeight:'bold'}}>{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right" sx={{ fontWeight:'bold'}}>{row.email}</StyledTableCell>
              <StyledTableCell align="right" >{row.address}</StyledTableCell>
              <StyledTableCell align="right" style={{color: row.Admin === 'Yes' ? '#00b300' : row.Admin === 'No' ? '#e74c3c' : 'inherit', fontWeight:'bold'}}>{row.Admin}</StyledTableCell>
              <StyledTableCell align="right" ><DeleteIcon sx={{cursor:'pointer'}} /></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}














export default UserList;


