import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemparture from './WeatherTemparture';
import {
    CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,
} from '../../../constants/Weathers';

//importacion de estilos
import './style.css';
const WeatherData = () =>(
    <div className="weatherDataCont">
        <WeatherTemparture 
            temperature={20} 
            weatherState={CLOUDY}
        />
        <WeatherExtraInfo  humidity={80} wind={"10 m/s"}/>        
    </div>
);

export default WeatherData;