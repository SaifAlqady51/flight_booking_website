import axios from 'axios';

const getProductById = async (productId: string) => {
    const response = await axios.get(`/api/getProducts?id=${productId}`);
    return response.data;
};

export default getProductById;
