import axios from 'axios';
const apiBaseUrl = '';

const _getAuthHeaders = async (file?: 'file' | 'json') => {
  try {
    const headers = {
      Accept: 'application/json',
      'Content-Type': file === 'file' ? 'multipart/form-data' : 'application/json',
    };

    const accessToken = '';

    return {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    };
  } catch (e: any) {
    throw 'an error occured';
  }
};

const getMessage = (message: any) => {
  if (typeof message === 'object') {
    const firstKey = Object.keys(message)[0];
    const firstValue = message[firstKey];
    return firstValue;
  }
  return message;
};

export const _handleAxiosError = (err: any) => {
  if (err.isAxiosError && err.response) {
    const { data } = err.response;
    if (data.message || data.error.message) {
      const responsMsg = getMessage(data.message || data.error.message);
      return { ...data, message: responsMsg };
    }

    if (!data.message || !data.error.message) {
      return { ...data, message: 'Unable to process request. Try again' };
    }

    return {
      message: 'A system error occured',
      status: false,
      statusCode: 1000,
    };
  }else{
    return {
      message: 'Check your internet connection',
    }
  }
};

export class RequestService {
  static constructQueryString = (params: { [key: string]: any }): string => {
    return Object.keys(params)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  };

  static async get<T>(url: string) {
    try {
      const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        headers: await _getAuthHeaders(),
      });
      const response = await axiosInstance.get<T>(url);
      return response.data;
    } catch (err: any) {
      throw _handleAxiosError(err);
    }
  }

  static async post<T>(url: string, data: { [key: string]: any }) {
    try {
      const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        headers: await _getAuthHeaders(),
      });
      const response = await axiosInstance.post<T>(url, data);
      return response.data;
    } catch (err: any) {
      throw _handleAxiosError(err);
    }
  }

  static async delete<T>(url: string, data: { [key: string]: any }) {
    try {
      const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        headers: await _getAuthHeaders(),
      });
      const response = await axiosInstance.delete<T>(url, data);
      return response.data;
    } catch (err: any) {
      throw _handleAxiosError(err);
    }
  }

  static async put<T>(url: string, data: { [key: string]: any }) {
    try {
      const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        headers: await _getAuthHeaders(),
      });
      const response = await axiosInstance.put<T>(url, data);
      return response.data;
    } catch (err: any) {
      throw _handleAxiosError(err);
    }
  }

  static async patch<T>(url: string, data: { [key: string]: any }) {
    try {
      const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        headers: await _getAuthHeaders(),
      });
      const response = await axiosInstance.patch<T>(url, data);
      return response.data;
    } catch (err: any) {
      throw _handleAxiosError(err);
    }
  }
}
