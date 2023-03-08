import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Buttona from './AddButton';
import { Link } from 'react-router-dom';
import IconButtonSizes from './bttn';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: { },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
     },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default class CustomizedTables extends React.Component {
    constructor()
    {
        super();
        this.state={Items:[]};
    }
    componentDidMount()
    {
        axios.get('http://localhost:8080/getValues')
        .then(response => {
            console.log(response.data);
          this.setState({ Items: response.data });
        })
        .catch(error => {
          console.log(error);
        });    
    }

    handleClick=(e)=>{
        console.log(e.target.id);
        var l=axios.delete('http://localhost:8080/delete/'+e.target.id);
        console.log(l);
        window.location.reload();
    }
    render()
    {
  return (<div className='bd1'>
    <TableContainer component={Paper}>
      <h1>Item List</h1>
      <br></br>
      <hr/>
      <br></br>
      <Link to="/app"><button className='bd6'>Add</button></Link><br></br><br></br>
      <hr/>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center" className='tp1'>ID</StyledTableCell>
            <StyledTableCell align="right" className='tp1'>NAME</StyledTableCell>
            <StyledTableCell align="right" className='tp1'>PRICE</StyledTableCell>
            <StyledTableCell align="center" className='tp1'>DELETE ITEM</StyledTableCell>
            <StyledTableCell align="center" className='tp1'>UPDATE ITEM</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.Items.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="center"><button id={row.id} onClick={this.handleClick} className="bd2">Delete</button></StyledTableCell>
              <StyledTableCell align="center"><Link to={"/update/"+row.id}><button id={row.id} onClick={this.handleUpdate} className="bd2">Update</button></Link></StyledTableCell>
            </StyledTableRow>

          ))}
        </TableBody>
      </Table><br></br>
    </TableContainer>
    </div>
    
  );
          }
}
