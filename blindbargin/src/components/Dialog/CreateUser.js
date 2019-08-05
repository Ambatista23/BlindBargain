import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FormControl } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    first_name: '',
    last_name: '',
    username: '',
    passcode: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
       <Fab color="secondary" aria-label="" onClick={handleClickOpen} className={classes.fab}>
       <i className="material-icons">
            person_add
            </i>
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Sign UP!</DialogTitle>
        <DialogContent>
          <DialogContentText>
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="First Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('first_name')}
        margin="normal"
        variant="outlined"
       />
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-name"
        label="Last Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('last_name')}
        margin="normal"
        variant="outlined"
       />
        </FormControl>   
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-username"
        label="Username"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('username')}
        margin="normal"
        variant="outlined"
       />
        </FormControl>  
        </Grid>
        <Grid item xs={6} sm={6}>
        <FormControl className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-passcode"
        label="passcode"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('passcode')}
        margin="normal"
        variant="outlined"
       />
        </FormControl>
        </Grid>
      </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="raised">
           Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}