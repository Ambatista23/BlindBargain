
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
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import API from "../../utils/API";
import {validate} from "../Validation/postItemValidation";

import { FormControl } from '@material-ui/core';


// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [values, setValues] = React.useState({
    product_name: "",
    description: "",
    category: "Controlled",
    price: "USD"
  });

  const handleChange = name => event => {
    // let valid = handleValidation(name, event.target.value);
    
    // pop up notifcation if validation error
    setValues({ ...values, [name]: event.target.value });

  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
    
   
    //Grab value and put into state.
  }


  // function handleValidation(name, value) {
  //   // switch(name){
  //   //   case "product_name": 
  //     if(value.trim() === "") {
        
  //     }  
  //   }
  

  function handleSubmit() {
    // include validation checking before posting item
    validate(values);
    API.postItem(values);
  }


  return (
    <div className={classes.root}>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleClickOpen}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Post an Item to auction!
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-name"
                    label="product name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange("product_name")}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-Product-name"
                    label="description"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange("description")}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="category"
                    label="category"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange("category")}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={6}>
                <FormControl
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-name"
                    label="price"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange("price")}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary" variant="raised">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
