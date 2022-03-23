/* eslint-disable implicit-arrow-linebreak */
import axios, { AxiosError } from 'axios';

const errorHandler = (error: AxiosError) => {
  throw new Error(JSON.stringify({ statusCode: error.response?.status, status: error.response?.statusText }));
};

export const get = async (url: string, token: string) => axios.get(url, { headers: { Authorization: `Bearer ${token}` } }).catch(errorHandler.bind(this));

export const post = () => {};
