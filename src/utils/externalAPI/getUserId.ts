import axios from 'axios';

export const getUserId = async () => {
    try {
        const response = await axios.get(`${process.env.URL}/api`);
        return response.data.id;
    } catch (error) {
        throw new Error(`Error : ${error}`);
    }
};
