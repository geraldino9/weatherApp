import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';


import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';


import ForeCastExtended from './components/ForeCastExtended';
import LocationListContainer from './containers/LocationListContainer';





import './App.css';
import { render } from '@testing-library/react';




const cities =[
  'Bogota,col',
  'Barcelona,es',
  'Buenos aires,ar',
  'Washington,us',
];




class  App extends Component {

  constructor(){
    super();
    this.state = {
      city:null,
    };
  }




render(){
    const {city} = this.state;
    return (
      <Grid > 
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography color="inherit" variant="h5">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
            
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {/* {city ? <ForeCastExtended city={city} ></ForeCastExtended>:<h1>No se ha seleccionado ciudad</h1>} */}
                {city && <ForeCastExtended city={city} ></ForeCastExtended>}
                  
              </div> 
            </Paper>
            
          </Col>
        </Row>
        
      </Grid>
    );
}
  
}



export default App;

