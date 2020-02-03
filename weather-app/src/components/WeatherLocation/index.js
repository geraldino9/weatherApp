import React, { Component } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';

import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';



import {
    CLOUDY,SUN
} from './../../constants/Weathers';




import './style.css';


class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const {city} = props;

        this.state={
            city,
            data:null,
        };
        // console.log("constructor");
    }
    
    componentDidMount() {
        // console.log("componentDidMount"); 
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        // console.log("componentDidUpdate");
    }
    
    
    componentWillMount() {
        // console.log("UNSAFE componentWillMount");
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log("UNSAFE componentWillUpdate");   
    }
    
    



    handleUpdateClick = () =>{   
        const api_weather =  getUrlWeatherByCity( this.state.city );    
        fetch(api_weather).then(resolve => {           
            return resolve.json();
        }).then( data => { 
            const newWeather = transformWeather(data);            
            //console.log(newWeather);         
            // debugger;
            this.setState(
                {
                    //city:"Buenos Aires",
                    data:newWeather
                }
            );          
        });
    }

    render= ()=>{
        // console.log("render");
        const {city,data} = this.state;
        const {onWeatherLocationClick} = this.props;
        return(
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city}></Location>
                {data ? 
                    <WeatherData data={data} ></WeatherData> :
                    <CircularProgress />
                }
                {/* <button onClick={this.handleUpdateClick}>Actualizar</button>   */}
            </div>
        );
    }
}
    
WeatherLocation.propTypes = {
    city:PropTypes.string.isRequired,
    onWeatherLocationClick:PropTypes.func,
};

export default WeatherLocation;