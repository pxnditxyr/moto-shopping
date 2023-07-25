import axios, { AxiosRequestConfig } from 'axios';
import { getEnvVariables } from '../helpers';

const { VITE_API_URL } = getEnvVariables();

const bomberosApi = axios.create({
  baseURL: VITE_API_URL || 'http://localhost:3002',
});

bomberosApi.interceptors.request.use( ( config : AxiosRequestConfig ) : AxiosRequestConfig => {
  const token = localStorage.getItem( 'token' ) || '';
  config.headers = { ...config.headers };
  config.headers[ 'Authorization' ] = `Bearer ${ token }`;
  return config;
} );

export default bomberosApi;
