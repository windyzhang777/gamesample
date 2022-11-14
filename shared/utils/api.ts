import axios from 'axios';

axios.defaults.baseURL = 'https://11D5B.playfabapi.com/Client';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common['X-Authorization'] = token;
};

export const post = (url: string, data?: any, config?: any) =>
  axios
    .post(url, {...data, TitleId: '11D5B'}, config)
    .then((response) => response.data.data || response.data || response);

export const executeCloudScript = (functionName: string, args: any) =>
  post('ExecuteCloudScript', {
    FunctionName: functionName,
    FunctionParameter: args,
  }).then((response) => response.FunctionResult || response);

export default {
  post,
  /**
     *
     *   request<T = any, R = AxiosResponse<T>> (config: AxiosRequestConfig): Promise<R>;
     get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
     delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
     head<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
     options<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>;
     post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
     put<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
     patch<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
     */
};
