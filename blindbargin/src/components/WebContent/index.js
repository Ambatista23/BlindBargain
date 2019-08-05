import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MediaCard from "../Card/Card.js";
import Grid from '@material-ui/core/Grid';
// import axios from 'axios';




export default function SimpleContainer() {
  //This is where state will store items into DB.
  //Use componentDidMount to fetch all items from DB.
  //GET req with axios to communicate with server/db into sequelize.


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '', height: 'auto' }} />
        <Grid>
        {/* Within this components we will map each item into card. */}
        <MediaCard>
        </MediaCard>
        </Grid>
      </Container>
    </React.Fragment>
  );
}



// class ItemList extends Component {
// constructor(props) {
//   super(props);
  
//   this.state = {
//     items:[]
//   };
// }
//   componentDidMount(){
//     axios.get("/api/item/")
//     .then(res =>{
//       this.setState({
//         items: res.data
//       })
//     })
//   }
  

//   render(){
//     return(<React.Fragment>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <Typography component="div" style={{ backgroundColor: '', height: '200px' }} />
//         <Grid>
//         {/* Within this components we will map each item into card. */}
//         <MediaCard>
//         </MediaCard>
//         </Grid>
//       </Container>
//     </React.Fragment>
//     );
//   }
// }


// export default ItemList;