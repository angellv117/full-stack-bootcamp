import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import axios from 'axios'
import Information from './components/Information'

export default function App() {
  const [countryData, setCountryData] = useState([])
  const [countryName, setCountryname] = useState('')
  
  const handleCountryChenge = (event) => {
    setCountryname(event.target.value)
    if((document.getElementById('countrytxt').value).length === 0){
      setWeatherapi([])
      console.log("0")
    }
    axios
      .get('https://restcountries.com/v3.1/name/' + document.getElementById('countrytxt').value)
      .then(response => {
        console.log('promise fulfilled')
        const data = response.data
        setCountryData(data)
        

      })


  }



  return (
    <div>
      <Search id='countrytxt' value={countryName} onChange={handleCountryChenge} ></Search>
      <Information countryData={countryData} ></Information>

    </div>
  )
}
