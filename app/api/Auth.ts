import axios from 'axios';
import { JWT } from '../types/JWT';

const API_URL = 'https://junior-test.mntzdevs/';

export const login = async (username: string, password: string): Promise<JWT> => {
  const response = await axios.post(`${API_URL}/api/login`, {
    username,
    password,
  });

  return response.data;
};

export const register = async (
  username: string,
  password: string
): Promise<JWT> => {
  const response = await axios.post(`${API_URL}/api/register`, {
    username,
    password,
  });

  return response.data;
};

export const setAuthToken = (token: string): void => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};