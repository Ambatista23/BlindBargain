
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
       <Fab color="secondary" aria-label="add" onClick={handleClickOpen} className={classes.fab}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Post an Item to auction!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            content
          </DialogContentText>
          {/* <Form>

          </Form> */}
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} color="primary">
           Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}














// import React, { Component, Fragment } from "react";
// import Dialog from '@material-ui/core/Dialog';
// import Button from '@material-ui/core/Button';

// // import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';




// export default class extends Component{ 
//   state =  {
//     open: false
//   }

//   handleToggle = () => {
//     this.setState({
//       open: this.state.open
//     })
//   }

//   render () {
//     const { open } = this.state
//     // const classes = useStyles();
    
//     return (
//       <Fragment>
//       <Button variant="outlined" color="action" onClick={this.handleToggle}>
//         Open form dialog
//       </Button>
 
//       <Dialog open={open} onClose={this.handleToggle} aria-labelledby="form-dialog-title">
//          <DialogTitle id="form-dialog-title">Post an Item to Auction</DialogTitle>
//          <DialogContent>
//            <DialogContentText>
//             content
//            </DialogContentText>
//            Please fill out the form below
//          </DialogContent>
        
//          <DialogActions>
     
//            <Button color="primary">
//              Post
//            </Button>
//          </DialogActions>
//        </Dialog>
//       </Fragment>
//      );
//   }
// }



 
