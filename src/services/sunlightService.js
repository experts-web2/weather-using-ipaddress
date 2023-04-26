import axios from "axios";

const IPBASE_API_KEY = "";

const getLocationService = async (latitude, longitude) => {
  try {
    const res = await axios.get(
      `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const fetchLocation = async (ip) => {
  try {
    const res = await axios.get(
      `https://api.ipbase.com/v2/info?apikey=${IPBASE_API_KEY}&/${ip}`
    );
    return res.data.data.location;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getLocationService, fetchLocation };
