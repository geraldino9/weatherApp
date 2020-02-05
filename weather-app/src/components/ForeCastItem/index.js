import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData/';


const ForeCastItem=({weekDay, hour, data}) => {
    return (
        <div>
            <div>
               <h3> {weekDay} - {hour} hrs </h3>
            </div>
            <div>
                <WeatherData data ={data} />
            </div>
        </div>
    );
}


ForeCastItem.prototypes = {
    weekDay:PropTypes.array.isRequired,
    hour:PropTypes.number.isRequired,
    data: PropTypes.shape(
        {
            temperature: PropTypes.number.isRequired,
            weatherState:PropTypes.string.isRequired,
            humidity:PropTypes.number.isRequired,
            wind:PropTypes.string.isRequired,
        }
    )
}

export default ForeCastItem;