import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

// Get product by ID
export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch product details');
  }
};
