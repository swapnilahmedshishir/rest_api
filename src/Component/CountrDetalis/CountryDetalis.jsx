import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Info from '../Info/Info';

const CountryDetalis = () => {
    const {country} = useParams() ;
    const [countrys , setCountrys] = useState([]);
    
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${country}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountrys(data))
    }, [] );

   
    return (
        <div >
            <h1>Country Info </h1>
            {
                countrys.map(cn => <Info key={cn.capital} Infomation={cn}></Info>)
            }
            
            
        </div>
    );
};

export default CountryDetalis;