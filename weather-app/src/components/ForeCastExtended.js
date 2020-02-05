import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ForeCastItem from './ForeCastItem';

import transformForeCast from './../services/transformForeCast';

import './style.css';

// const days =['Lunes','Martes','Miercoles','Jueves','Viernes',];
// const data={
//     temperature:10,
//     humidity:10,
//     weatherState: 'normal',
//     wind: 'normal',
// };

const api_key ="94a363d8c9c8182e49f359dfc53d8033";
const url_base_weather ="http://api.openweathermap.org/data/2.5/forecast";

class ForeCastExtended extends Component {

    constructor(){
        super();
        this.state={ foreCastData:null };
    }

    componentDidMount(){
      //fectch or axios
      this.updateCity(this.props.city);        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({foreCastData:null});
            this.updateCity(nextProps.city);
            
        }
    }


    updateCity =city =>{
        const url_forecast =` ${url_base_weather}?q=${city}&appid=${api_key}`;

      fetch(url_forecast).then( 
          data => ( data.json() )
       ).then(
           weather_data => { 
               console.log(weather_data)
               const foreCastData = transformForeCast(weather_data);
               console.log(foreCastData)
                this.setState({foreCastData});
            }
       ) 
    }

    renderForeCastItemDays( forecastData ){
       // return "render items";
        return forecastData.map( forecast =>  <ForeCastItem key={`${forecast.weekDay} ${forecast.hour}`}
                                                    weekDay={forecast.weekDay} 
                                                    hour={forecast.hour} 
                                                    data={forecast.data}/> 
                                );

    }
    renderProgress(){
        console.log(this.state.foreCastData);
        return <h3> Cargando pronóstico extendido...</h3>;
    }

    render() {
        const {city} = this.props;
        const {foreCastData} = this.state;
        return (
            <div>
                <h2 className="forecast-title">
                    Pronóstico extendido para {city}                   
                </h2>
                {foreCastData ?
                this.renderForeCastItemDays(foreCastData):
                this.renderProgress()                                
                }
            </div>
        );
    }
}

ForeCastExtended.propTypes = {
    city:PropTypes.string.isRequired,
};

export default ForeCastExtended;