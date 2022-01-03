import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 1 }} {...other}>
      {children}
      {onClose ? (
        <>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
function MatDialog({
  open,
  handleClose,
  children,
  title,
  isCancel,
  isSubmit,
  isAction,
}) {
  return (
    
 
      <BootstrapDialog className="modelPopUp"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h3" style={{ marginRight: '3em' }}>
            {title}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        {isAction && (
          <DialogActions dividers className="css-hlj6pa-MuiDialogActions-root">
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              {isCancel && <Button onClick={handleClose} className="box-btn-cancel">Cancel</Button>}
              {isSubmit && <Button autoFocus className="btn">Save changes</Button>}
            </Box>
          </DialogActions>
        )}
      </BootstrapDialog>
  
    
  );
}

export default MatDialog;
