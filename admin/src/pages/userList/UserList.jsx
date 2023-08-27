
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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




const ProductList = () => {
  return (
    <div className="product-list-container">
    <div className='deleteAllDiv'><Button variant="contained">Delete All &nbsp; <DeleteIcon fontSize='small' sx={{color:'#fff'}} /></Button></div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'bold'}} align='left'>id</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">firstName</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">lastName</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">phone</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">email</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">address</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Admin</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight: 'bold'}}>
                {row.id + index + 1}
              </TableCell>
              <TableCell component="th" align="right" scope="row" sx={{fontWeight:'bold'}}>  {row.firstName}</TableCell>
              <TableCell align="right" sx={{fontWeight:'bold'}}>{row.lastName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right" sx={{ fontWeight:'bold'}}>{row.email}</TableCell>
              <TableCell align="right" >{row.address}</TableCell>
              <TableCell align="right" style={{color: row.Admin === 'Yes' ? '#00b300' : row.Admin === 'No' ? '#e74c3c' : 'inherit', fontWeight:'bold'}}>{row.Admin}</TableCell>
              <TableCell align="right" ><DeleteIcon sx={{cursor:'pointer'}} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default ProductList;


