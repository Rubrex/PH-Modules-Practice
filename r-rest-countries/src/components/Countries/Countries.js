import React, { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../Country/Country";

const Countries = () => {
  // State
  const [countries, setCountries] = useState([]);
  // Side Effects
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  // Set default value
  let countryLists = [...countries];
  // Sort Countries by country name
  const sortByCountryName = () => {
    countryLists.sort((a, b) => {
      let fa = a.name.common.toLowerCase(),
        fb = b.name.common.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setCountries(countryLists);
  };
  // Sort Countries by Polulation
  const sortByPopulation = () => {
    countryLists.sort((a, b) => {
      return b.population - a.population;
    });
    setCountries(countryLists);
  };
  // Sort Countries by Area
  const sortByArea = () => {
    countryLists.sort((a, b) => {
      return b.area - a.area;
    });
    setCountries(countryLists);
  };

  // Country Component
  return (
    <div className="countries-container">
      <div className="select-Countries">
        <button onClick={sortByCountryName}>Sort by Name</button>
        <button onClick={sortByPopulation}>Sort by Population</button>
        <button onClick={sortByArea}>Sort by Area</button>
      </div>
      <div className="countries-parent">
        {countries.map((country, index) => {
          return (
            <Country
              key={index}
              name={country.name.common}
              official={country.name.official}
              flag={country.flags.svg}
              capital={country.capital}
              population={country.population}
              area={country.area}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Countries;
