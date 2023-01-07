import axios from 'axios';

const BASE_URI = 'https://633740935327df4c43d22bb2.mockapi.io/api/v1/';

interface RequestProps {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  path?: string;
  body?: any;
  headers?: any;
  baseURL?: string;
  params?: any;
}

const request = async ({ method, path, body, headers, baseURL, params }: RequestProps) => {
  try {
    const apiURL = baseURL || BASE_URI;

    const { status, data } = await axios.request({
      baseURL: apiURL,
      headers,
      method,
      url: path,
      data: body,
      params,
    });

    return {
      status,
      error: data.error,
      data: data.data ? data.data : data,
    };
  } catch (error) {
    return {
      error,
    };
  }
};

export default request;
