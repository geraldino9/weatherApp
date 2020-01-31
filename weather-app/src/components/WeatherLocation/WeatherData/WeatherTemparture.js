import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,CLOUDY,SUN,RAIN,SNOW,WINDY,
} from '../../../constants/Weathers';

import PropTypes from 'prop-types';

const icons ={
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]: "day-sunny",   
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy"
};


const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>    
}


const WeatherTemparture = ({temperature,weatherState}) =>(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }        
        <span>{`${temperature}°`}</span>
    </div>
);

WeatherTemparture.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};


export default WeatherTemparture;