import React from 'react';
import PropTypes from 'prop-types';

// const Location = (props) =>{
//     //destructuring
//     //busca el valor de la propiedad city del objeto props y 
//     //la asigna a una variable que se llamará city 
//     const {city} = props;
//     return (
//     <div> <h1>{city}</h1> </div>
//     );
// };

// otra forma de hacer destructuring es haciendolo en la declaración
// del metodo y de igual manarea se creará una variable con el mismos nombre
const Location = ({city}) =>{
    return (
    <div> <h1>{city}</h1> </div>
    );
};
    
Location.propTypes ={
    city:PropTypes.string.isRequired,
};


export default Location;