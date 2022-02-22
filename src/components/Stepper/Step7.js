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
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function createData(fileProcessing, ColumnOrder, ColumnName, DataType) {
  return { fileProcessing, ColumnOrder, ColumnName, DataType };
}

function Step8() {
  const [Rows, SetRows] = React.useState([]);

  React.useEffect(() => {
    const rows = [createData('Column1', '1', 'Column1', 'Numeric')];
    SetRows(rows);
  }, [0]);

  const AddRows = (obj) => {
    const row = createData(
      obj.fileProcessing,
      obj.ColumnOrder,
      obj.ColumnName,
      obj.DataType
    );
    const rows = [...Rows, row];
    SetRows(rows);
  };
  const onAddRows = () => {
    let columnObj = {
      fileProcessing: 'Column1',
      ColumnOrder: '1',
      ColumnName: 'Column1',
      DataType: 'Numeric',
    };
    AddRows(columnObj);
  };
  const removeRow = () => {};
  return (
    <>
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
            {Rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <TextField
                    id="searchValue-input"
                    label="Report"
                    type="Text"
                  />
                </TableCell>
                <TableCell align="right">
                  <Select
                    labelId="readFromNextColCell-select-label"
                    id="readFromNextColCell-select"
                    value={1}
                  >
                    <MenuItem value={1}>Not Set</MenuItem>
                    <MenuItem value={2}>True</MenuItem>
                    <MenuItem value={3}>False</MenuItem>
                  </Select>
                </TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    onClick={removeRow}
                  >
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" spacing={2} style={{ marginTop: '10px' }}>
        <Button className="btn" variant="contained" onClick={onAddRows}>
          + Add New
        </Button>
      </Stack>
    </>
  );
}

export default Step8;
