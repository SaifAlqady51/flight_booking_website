import axios from 'axios';
import 'dotenv/config';

// convert city name to IATA code
export const getCityCodeFromCityName = async (cityName: string) => {
    try {
        const URL = `https://iata-code-api.vercel.app/get?cityName=${cityName}`;
        const response = await axios.get(URL);
        return response.data.IATA;
    } catch (error) {
        console.error(`Error : ${error}`);
    }
};

// convert IATA code to city name
export const getCityNameFromCityCode = async (cityCode: string) => {
    try {
        const URL = `https://airlabs.co/api/v9/airports?iata_code=${cityCode}&api_key=a202cae8-7c61-460d-87f6-9ca55ac159e3`;
        const response = await axios.get(URL);
        return response[0].name;
    } catch (error) {
        console.error(`Error : ${error}`);
    }
};
