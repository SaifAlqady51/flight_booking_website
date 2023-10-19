import axios from 'axios';

export const getUserId = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api');
        return response.data.id;
    } catch (error) {
        throw new Error(`Error : ${error}`);
    }
};
