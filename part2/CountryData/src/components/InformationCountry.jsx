import axios from 'axios'
import React, { useEffect, useState } from 'react'
const InformationCountry = ({ country }) => {

    const API_WEATHER = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&lang=es&q=`;


    const [weatherapi, setWeatherapi] = useState([])

    const hook = () =>{
        axios
        .get(API_WEATHER + country.capital)
        .then(response => {
            console.log('promise fulfilled')
            const data = response.data
            const newClima = {
                city: data.location.name,
                country: data.location.country,
                temperature: data.current.temp_c,
                condition: data.current.condition.code,
                conditionText: data.current.condition.text,
                icon: data.current.condition.icon,
            }
            setWeatherapi(newClima)
        })
    }
    useEffect(hook,[])
    const Lenguajes = ({ lenguajes }) => {
        return (
            <>
                {Object.values(lenguajes).map((lenguaje, index) => <li key={index}>{lenguaje}</li>)}
            </>
        )
    }

    const Img = ({ src }) => {
        return (
            <img src={src} />
        )
    }

    const Clima = () => {
        console.log(weatherapi.city)
        return (
            <div>
                <h2>Weather in {weatherapi.city}</h2>
                <Img src={weatherapi.icon}></Img>
                <p>Pronostico <strong>{weatherapi.conditionText}</strong></p>
                <p>temperature <strong>{weatherapi.temperature} ºC</strong></p>
            </div>
        )
    }


    return (
        <>
            <h1>{country.name.official}</h1>
            <p>capital: <strong>{country.capital}</strong></p>
            <p>population: <strong>{country.population}</strong></p>
            <h2>lenguajes</h2>
            <Lenguajes lenguajes={country.languages}></Lenguajes>
            <Img src={country.flags.png}></Img>
            <Clima></Clima>
        </>
    )
}
export default InformationCountry