import axios from 'axios';
import config from '../../env';

export const axiosInstance = axios.create({
  baseURL: config.backendurl || 'http://localhost:8000/api',
  withCredentials: true
});
