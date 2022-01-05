import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  marginTop: '8em',
  marginLeft: 8,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const muiBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,

  marginLeft: 8,
  padding: theme.spacing(1),
}));

export { Item, muiBox };
