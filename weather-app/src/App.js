import React, { Component } from 'react';
// import WeatherLocation from './components/WeatherLocation';
import LocationList from './components/LocationList';
import './App.css';
import { render } from '@testing-library/react';




const cities =[
  'Bogota,col',
  'Barcelona,es',
  'Buenos aires,ar',
  'Washington,us',
];

class  App extends Component {
  handleonWeatherLocation = city =>{
    console.log("handleonWeatherLocation");
  }
render(){
  
    return (
      <div className="App">
        {/* <WeatherLocation city="bogota,col"/> */}
        <LocationList cities={cities} onSelectedLocation={this.handleonWeatherLocation}/>
      </div>
    );
}
  
}

export default App;
