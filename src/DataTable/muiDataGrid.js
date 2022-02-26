import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

function MuiDataGrid({
  rows,
  columns,
  checkboxSelection,
  disableSelectionOnClick,
}) {
  console.log(rows);
  const ref = React.useRef();

  function NoRowsOverlay() {
    return (
      <Stack height="100%" alignItems="center" justifyContent="center">
        No rows in DataGrid
       
      </Stack>
    );
  }
  return (
    <Box
      sx={{
        height: 400,
        width: 1,
        '& .MuiDataGrid-cell--editing': {
          bgcolor: 'rgb(255,215,115, 0.19)',
          color: '#1a3e72',
        },
        '& .Mui-error': {
          bgcolor: (theme) =>
            `rgb(126,10,15, ${theme.palette.mode === 'dark' ? 0 : 0.1})`,
          color: (theme) =>
            theme.palette.mode === 'dark' ? '#ff4343' : '#750f0f',
        },
      }}
    >
      <DataGrid
        ref={ref}
        rows={rows}
        columns={columns}
        //loading={rows.length === 0}
        checkboxSelection={checkboxSelection}
        disableSelectionOnClick={disableSelectionOnClick}
        components={{
          Toolbar: GridToolbar,
          NoRowsOverlay
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: 'commodity',
                  operatorValue: 'contains',
                  value: 'rice',
                },
              ],
            },
          },
        }}
      />
    </Box>
  );
}
export default MuiDataGrid;
