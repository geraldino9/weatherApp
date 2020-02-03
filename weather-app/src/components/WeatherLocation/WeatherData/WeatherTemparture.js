import React from 'react';
import WeatherIcons from 'react-weathericons';
import {
    CLOUD,SUN,RAIN,SNOW,THUNDER,DRIZZLE,CLOUDY
} from '../../../constants/Weathers';

import PropTypes from 'prop-types';

const icons ={
    [CLOUD]:"cloud",
    // [CLOUDY]:"cloudy",
    [SUN]: "day-sunny",   
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstore",
    [DRIZZLE]:"day-showers"
};


const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcons = "4x";

    if(icon)
        return <WeatherIcons className="wIcon" name={icon} size={sizeIcons}/>
    else
        return <WeatherIcons className="wIcon" name={"day-sunny"} size={sizeIcons}/>    
}


const WeatherTemparture = ({temperature,weatherState}) =>(
    <div className="weatherTemperatureCont">
        {
            getWeatherIcon(weatherState)
        }        
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
);

WeatherTemparture.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};


export default WeatherTemparture;