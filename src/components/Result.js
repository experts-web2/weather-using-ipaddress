import React from "react";

const Result = ({ sunriseSunset, location }) => {
  return (
    <div>
      <h2>day_length: {sunriseSunset.day_length}</h2>
      <h2>Sunrise: {sunriseSunset.sunrise}</h2>
      <h2>Sunset: {sunriseSunset.sunset}</h2>
      <h2>Latitude: {location.latitude}</h2>
      <h2>Longitude: {location.longitude}</h2>
    </div>
  );
};

export default Result;
