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





function createData(id, name, Price, sold, Discount, Gender, type, size, color, orders, stock) {
  return { id, name, Price, sold, Discount, Gender , type, size, color, orders, stock };
}



let theId = 0
const rows = [
  createData(theId,'Frozen yoghurt', 159, 6, 24, "M",'pants', 'md', 'blue', 5, 'Yes'),
  createData(theId,'Ice cream sandwich', 27, 9, 37, "M",'pants', 'md', 'blue', 96, 'Yes'),
  createData(theId,'Eclair', 262, 16, 24, "F",'shorts', 'sm', 'purple', 6, 'No'),
  createData(theId,'Cupcake', 305, 7, 67, "M",'pants', 'md', 'blue', 0, 'Yes'),
  createData(theId,'Gingerbread', 36, 6, 49, "F",'tshirt', 'x-sm', "green", 5, 'Yes'),
  createData(theId,'Gingerbread', 35, 16, 49, "M",'pants', 'x-lg', "purple", 1, 'No'),
  createData(theId,'Gingerbread', 3, 1, 49, "M",'chemise', 'lg', "green", 52, 'Yes'),
];




const ProductList = () => {
  return (
    <div className="product-list-container">
    <div className='deleteAllDiv'>
      <Button variant="contained" sx={{backgroundColor: '#000 ', marginRight:"8px" , '&:hover': {backgroundColor: "rgba(0, 0, 0, 0.8) "}}}>
        Delete All &nbsp; <DeleteIcon fontSize='small' sx={{color:'#fff'}} />
      </Button>
      <Link to="/newproduct">
        <Button variant="contained" sx={{backgroundColor: '#000 ', marginLeft:"8px" , '&:hover': {backgroundColor: "rgba(0, 0, 0, 0.8) "}}} className="productAddButton">Create</Button>
      </Link>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontWeight: 'bold'}} align='left'>id</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}}>Product Name</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Type</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Gender</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Size</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Color</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Price&nbsp;($)</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Discount&nbsp;($)</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">sold</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">orders</StyledTableCell>
            <StyledTableCell sx={{fontWeight: 'bold'}} align="right">Stock</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow 
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell  component="th" scope="row" sx={{fontWeight: 'bold'}}>{row.id + index + 1}</StyledTableCell>
              <StyledTableCell  component="th" scope="row"><Link to="/product/:productId" style={{ textDecoration: 'underline', color: '#000', fontWeight: 'bolder' }}>{row.name}</Link></StyledTableCell>
              <StyledTableCell  align="right" sx={{fontWeight: "800"}}>{row.type}</StyledTableCell>
              <StyledTableCell  align="right" style={row.Gender === 'M' ? { color: '#3498db', fontWeight: 'bold' } :{ color: '#e91e63', fontWeight: 'bold' } }>{row.Gender}</StyledTableCell>
              <StyledTableCell  align="right" sx={{fontWeight: "800"}}>{row.size}</StyledTableCell>
              <StyledTableCell  align="right" style={row.color === 'purple' ? { color: 'purple',textTransform: 'uppercase', fontWeight: 600 } : row.color === 'blue' ? { color: 'blue',textTransform: 'uppercase', fontWeight: 600 } : row.color === 'green' ? { color: 'green', textTransform: 'uppercase', fontWeight: 600 } : { color: 'black' }}>{row.color}</StyledTableCell>
              <StyledTableCell  align="right" sx={{color:'#00b300', fontWeight: "800"}}>{row.Price}$</StyledTableCell>
              <StyledTableCell  align="right" sx={{color:'#e51b23', fontWeight:'bold'}}>{row.Discount}$</StyledTableCell>
              <StyledTableCell  align="right" sx={{fontWeight: "800"}}>{row.sold}</StyledTableCell>
              <StyledTableCell  align="right" sx={{fontWeight: "800"}}>{row.orders}</StyledTableCell>
              <StyledTableCell  align="right" style={{color: row.stock === 'Yes' ? '#00b300' : row.stock === 'No' ? '#e74c3c' : 'inherit', fontWeight:'bold'}}>{row.stock}</StyledTableCell>
              <StyledTableCell  align="right" ><DeleteIcon sx={{cursor:'pointer'}} /></StyledTableCell>
              <StyledTableCell  align="right" ><Link to="/update"><SyncAltRoundedIcon sx={{cursor:'pointer', textDecoration:'none', color: '#000'}} /></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default ProductList;


