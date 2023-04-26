import "./App.css";
import { getLocationService, fetchLocation } from "./services/sunlightService";
import React, { useState, useMemo, useEffect } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  const [ip, setIp] = useState("");
  const [location, setLocation] = useState({});
  const [sunriseSunset, setSunriseSunset] = useState({});

  const fetchLocationFun = useMemo(
    () => async () => {
      await fetchLocation(ip).then((res) => {
        console.log("res",res)
        setLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        });
      });
    },
    [ip]
  );

  useEffect(() => {

    if (ip) {
      fetchLocationFun();
    }
  }, [ip, fetchLocationFun]);

  const fetchSunSetData = useMemo(
    () => () => {
      if (!location.latitude || !location.longitude) return;
      try {
        getLocationService(location.latitude, location.longitude).then((res) => {
          console.log("res",res)
          setSunriseSunset(res);
        });
      } catch (error) {
        console.error(error);
      }
    },
    [location.latitude, location.longitude]
  );

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchSunSetData();
    }
  }, [location.latitude, location.longitude, fetchSunSetData]);

  return (
    <div className="App">
      <Form onSubmit={setIp} />
      {sunriseSunset.sunrise && sunriseSunset.sunset ? (
        <Result sunriseSunset={sunriseSunset} location={location} />
      ) : (
        <p>Enter an IP address to get the sunrise and sunset.</p>
      )}
    </div>
  );
};

export default App;
