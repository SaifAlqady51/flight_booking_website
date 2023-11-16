import axios from "axios";


const getPrices = async() =>  {

	const response  = await axios.get('/api/getPrices')
	return response.data
}

export default getPrices;
