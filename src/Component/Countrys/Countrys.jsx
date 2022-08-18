import React from 'react';
import { Link } from 'react-router-dom';

const Countrys = (props) => {
    
    const {capital,flags} = props.countrys;
    const {common} = props.countrys.name;
    return (
        <div className='boxStyle'>
            <img src={flags.png} alt=''/>
            <h1>Country Name : {common}</h1>
            <p>Capital : {capital}</p>
            <Link to={`/countryDetails/${common}`}><button>Country Info</button></Link>
            

        </div>
    );
};

export default Countrys;