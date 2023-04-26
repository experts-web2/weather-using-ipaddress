import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  fetchLocation,
  getLocationService,
} from "../services/sunlightService";
const SunriseSunset = () => {
  const [formData, setFormData] = useState({
    ip: "",
  });
  const [location, setLocation] = useState({});
  const [sunriseSunset, setSunriseSunset] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // const fetchLocation = async () => {
    if (!formData.ip) return;

    try {

      fetchLocation(formData.ip).then((res) => {
        console.log("res of ip address",res)
        setLocation({
          latitude: res.latitude,
          longitude: res.longitude,
        });
      });
      // const res = await axios.get(
      //   `https://api.ipbase.com/v2/info?apikey=56ZnRvu6eJgEpJvIKeubquQb677amSgM5vTl3EB8&/${formData.ip}`
      // );
      // console.log("res of data", res.data.data.location);
      // setLocation({
      //   latitude: res.data.data.location.latitude,
      //   longitude: res.data.data.location.longitude,
      // });
    } catch (error) {
      console.error(error);
      //   }
    }

    fetchLocation();
  }, [formData.ip]);

  useEffect(() => {
    if (!location.latitude || !location.longitude) return;
    try {
      getLocationService(location.latitude, location.longitude).then((res) => {
        console.log("response of sun light",res)
        setSunriseSunset(res);
      });
    } catch (error) {
      console.error(error);
    }

    // const fetchSunriseSunset = async () => {

    //   try {
    //     const res = await axios.get(
    //       `https://api.sunrise-sunset.org/json?lat=${location.latitude}&lng=${location.longitude}`
    //     );
    //     console.log("res of data sunrise", res.data.results);
    //     setSunriseSunset(res.data.results);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchSunriseSunset();
  }, [location]);

  return (
    <div>
      <form>
        <label htmlFor="ip">
          IP Address:
          <input
            type="text"
            name="ip"
            value={formData.ip}
            onChange={handleChange}
          />
        </label>
      </form>
      {location.latitude && location.longitude && (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Sunrise: {sunriseSunset.sunrise}</p>
          <p>Sunset: {sunriseSunset.sunset}</p>
        </div>
      )}
    </div>
    // form component 
    // display result

  );
};

export default SunriseSunset;
