import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from '@mui/material/Link';

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

function Row(props) {
  const { row, PermissionOpen, ClickOpen, viewOpen, dialogOpen } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell></TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.calories}</TableCell>
        <TableCell align="center">{row.fat}</TableCell>
        <TableCell align="center">
          <span onClick={PermissionOpen} className="count">
            {row.carbs}{' '}
          </span>
        </TableCell>
        <TableCell align="center">
          {' '}
          <Link href="" className="link-tool" href="javascript:void(0)">
            {' '}
            <RemoveRedEyeIcon onClick={viewOpen} />
          </Link>{' '}
          <Link className="link-tool" href="javascript:void(0)">
            {' '}
            <EditIcon onClick={ClickOpen} />
          </Link>{' '}
          <Link className="link-tool" href="javascript:void(0)">
            {' '}
            <DeleteIcon onClick={dialogOpen} />
          </Link>{' '}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'Power User | BD Team',
    'Lorem Ipsum is simply dummy text of the printing and typesetting',
    6.0,
    24,
    4.0,
    3.99
  ),
  createData(
    'Ice cream sandwich',
    'Lorem Ipsum is simply dummy text ',
    9.0,
    37,
    4.3,
    4.99
  ),
  createData(
    'Eclair',
    'Lorem Ipsum is simply dummy text of ',
    16.0,
    24,
    6.0,
    3.79
  ),
  createData(
    'Cupcake',
    'Lorem Ipsum is simply dummy text of the printing and typesetting',
    3.7,
    67,
    4.3,
    2.5
  ),
  createData('Gingerbread', 'Lorem Ipsum is simply ', 16.0, 49, 3.9, 1.5),
];

export default function CollapsibleTable({
  PermissionOpen,
  ClickOpen,
  viewOpen,
  dialogOpen,
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Role Name</TableCell>
            <TableCell align="center">Role Description</TableCell>
            <TableCell align="center">Users</TableCell>
            <TableCell align="center">Permission</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row
              key={row.name}
              PermissionOpen={PermissionOpen}
              ClickOpen={ClickOpen}
              viewOpen={viewOpen}
              dialogOpen={dialogOpen}
              row={row}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
