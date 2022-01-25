import * as React from 'react';
import {Button, Snackbar, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import useState from 'react'
import MuiAlert from '@mui/material/Alert';

const Toasty = ({open, onClose}) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    onClose()
  };

  const action = (
    <MuiAlert elevation={6} variant="filled" />
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
    </div>
  );
}

export default Toasty
