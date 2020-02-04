import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="ExtraInfoText">{`Humedad: ${humidity} %`}</span>
        <span className="ExtraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);
WeatherExtraInfo.propTypes = {
    humidity:PropTypes.number.isRequired,
    wind:PropTypes.string.isRequired,
};
export default WeatherExtraInfo;