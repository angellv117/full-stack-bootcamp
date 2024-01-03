import React, { useState } from 'react';
import InformationCountry from './InformationCountry';

export default function Country({ name, index, countryData }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible); // Cambia el estado de visibilidad al hacer clic en el botón
  };

  return (
    <>
      <li>
        {`${name}`}
        <button onClick={handleButtonClick}>{isVisible ? 'hide' : 'show'}</button>
      </li>
      {isVisible && (
        <div>
          <InformationCountry country={countryData[index]}></InformationCountry>
        </div>
      )}
    </>
  );
}
