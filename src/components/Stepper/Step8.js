import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
function createData(fileProcessing, ColumnOrder, ColumnName, DataType) {
  return { fileProcessing, ColumnOrder, ColumnName, DataType };
}

const rows = [
  createData('Column1', '1', 'Column1', 'Numeric'),
  createData('Column2', '2', 'Column2', 'Numeric'),
  createData('Column3', '3', 'Column3', 'Numeric'),
];
function Step8() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Report Header</TableCell>
            <TableCell align="right">Data Type</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <TextField id="searchValue-input" label="" type="Text" />
              </TableCell>
              <TableCell align="right">
                <Select
                  labelId="readFromNextColCell-select-label"
                  id="readFromNextColCell-select"
                  label=""
                >
                  <MenuItem value={1}>Not Set</MenuItem>
                  <MenuItem value={2}>True</MenuItem>
                  <MenuItem value={3}>False</MenuItem>
                </Select>
              </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Step8;
