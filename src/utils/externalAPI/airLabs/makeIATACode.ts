import axios from 'axios';
import 'dotenv/config';

// convert city name to IATA code
export const getCityCodeFromCityName = async (city: string) => {
    try {
        const URL = `https://airlabs.co/api/v9/suggest?q=${city}&api_key=${process.env.AIRLABS_API_KEY}`;
        const response = await axios.get(URL);
        return response.data.response.cities[0].city_code;
    } catch (error) {
        console.error(`Error : ${error}`);
    }
};
