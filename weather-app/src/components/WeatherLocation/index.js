import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import {
    CLOUDY,SUN
} from './../../constants/Weathers';
import './style.css';

const data = {
    temperature:5,
    weatherState: CLOUDY,
    humidity: 10,
    wind: '10 m/s'
};



const location ="Buenos Aires,ar";
const api_key ="94a363d8c9c8182e49f359dfc53d8033";
const url_base_weather ="http://api.openweathermap.org/data/2.5/weather";

const  api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;


class WeatherLocation extends Component{

    constructor(){
        super();
        this.state={
            city:"Bucaramanga",
            data:data,
        };
    }

    getWeatherState = weather_data =>{
        return SUN;
    }

    getData= weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = SUN;


        const data = {
            humidity,
            temperature:temp,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }

    handleUpdateClick = () =>{
        fetch(api_weather).then(resolve => {           
            return resolve.json();
        }).then( data => {            
            const newWeather = this.getData(data);            
            console.log(newWeather); 
            debugger;           
            this.setState(
                {
                    city:"Pamplona",
                    data:newWeather
                }
            );
          
        });

        
        
    }

    render(){
        const {city,data} = this.state;
        return(
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data} ></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>  
            </div>
        );
    }
}
    


export default WeatherLocation;