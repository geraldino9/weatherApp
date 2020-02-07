import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import {createStore} from 'redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

import LocationList from './components/LocationList';
import ForeCastExtended from './components/ForeCastExtended';

import './App.css';
import { render } from '@testing-library/react';




const cities =[
  'Bogota,col',
  'Barcelona,es',
  'Buenos aires,ar',
  'Washington,us',
];


const store = createStore( ()=> {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// actionCreator
const setCity  = value => ( { type: 'setCity', value} );

class  App extends Component {

  constructor(){
    super();
    this.state = {
      city:null,
    };
  }



  handleonWeatherLocation = city =>{
    this.setState({
      city,
    });
    console.log(`handleonWeatherLocation ${city}`);
    store.dispatch(setCity(city));
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
            <LocationList cities={cities} onSelectedLocation={this.handleonWeatherLocation}/>
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


