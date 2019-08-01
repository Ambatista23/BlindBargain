import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MediaCard from "../Card/Card.js";
import Grid from '@material-ui/core/Grid';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ backgroundColor: '', height: '200px' }} />
        <Grid>
        <MediaCard>
        </MediaCard>
        </Grid>
      </Container>
    </React.Fragment>
  );
}