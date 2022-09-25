import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country-container">
      <img src={props.flag} alt="" width="150px" />
      <h2>Country: {props.name}</h2>
      <h3>Official: {props.official}</h3>
      <strong>Capital: {props.capital}</strong>
      <p>Population: {props.population}</p>
      <p>Area: {props.area}</p>
    </div>
  );
};

export default Country;
