import React, { useState } from 'react'
import Country from './Country'
import InformationCountry from './InformationCountry'


const Information = ({countryData}) => {
    if (countryData.length === 0 ) {
        return <div>No hay coincidencias</div>
    }
    if (countryData.length > 10) {
        return <div>Demasiadas coincidencias, sea mas espesifico</div>
    }
    if (countryData.length <= 10 && countryData.length > 1) {
        return (
            <div>{countryData.map((country, index)=> <Country key={country.name.official} index={index} name={country.name.official} InformationCountry={InformationCountry} countryData={countryData}></Country>)}</div>
        )
    }
    if (countryData.length === 1) {
        return (
            <>
            <InformationCountry country={countryData[0]}></InformationCountry>
            </>
            
        )
    }

}

export default Information

