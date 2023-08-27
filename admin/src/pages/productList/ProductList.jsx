import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import "./productList.css";

function createData(id, name, Price, quantity, Discount, Gender, type, size, color,) {
  return { id, name, Price, quantity, Discount, Gender , type, size, color, };
}



let theId = 0
const rows = [
  createData(theId,'Frozen yoghurt', 159, 6.0, 24, "M",'pants', 'md', 'blue'),
  createData(theId,'Ice cream sandwich', 237, 9.0, 37, "M",'pants', 'md', 'blue'),
  createData(theId,'Eclair', 262, 16.0, 24, "F",'shorts', 'sm', 'purple'),
  createData(theId,'Cupcake', 305, 3.7, 67, "M",'pants', 'md', 'blue'),
  createData(theId,'Gingerbread', 356, 16.0, 49, "F",'tshirt', 'x-sm', "green"),
  createData(theId,'Gingerbread', 356, 16.0, 49, "M",'pants', 'x-lg', "purple"),
  createData(theId,'Gingerbread', 356, 16.0, 49, "M",'chemise', 'lg', "green"),
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
            <TableCell sx={{fontWeight: 'bold'}}>Product Name</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Type</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Gender</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Size</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Color</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Price&nbsp;($)</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">Discount&nbsp;($)</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="right">quantity</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{fontWeight: 'bold'}}>{row.id + index + 1}</TableCell>
              <TableCell component="th" scope="row"><Link to="/product/:productId" style={{ textDecoration: 'underline', color: '#000', fontWeight: 'bolder' }}>{row.name}</Link></TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right" style={row.Gender === 'M' ? { color: '#3498db', fontWeight: 'bold' } :{ color: '#e91e63', fontWeight: 'bold' } }>{row.Gender}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right" style={row.color === 'purple' ? { color: 'purple',textTransform: 'uppercase', fontWeight: 600 } : row.color === 'blue' ? { color: 'blue',textTransform: 'uppercase', fontWeight: 600 } : row.color === 'green' ? { color: 'green', textTransform: 'uppercase', fontWeight: 600 } : { color: 'black' }}>{row.color}</TableCell>
              <TableCell align="right" sx={{color:'#00b300'}}>{row.Price}$</TableCell>
              <TableCell align="right" sx={{color:'#e51b23', fontWeight:'bold'}}>{row.Discount}$</TableCell>
              <TableCell align="right">{row.quantity}x</TableCell>
              <TableCell align="right" ><DeleteIcon sx={{cursor:'pointer'}} /></TableCell>
              <TableCell align="right" ><SyncAltRoundedIcon sx={{cursor:'pointer'}} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default ProductList;


