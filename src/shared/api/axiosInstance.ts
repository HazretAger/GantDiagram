import axios from 'axios';
import { USER_ACCESS_TOKEN_KEY } from '@/shared/const/localStorage';

const generateAxios = (contentType: string) => {
    return axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
            'Content-Type': contentType,
            Authorization: localStorage.getItem(USER_ACCESS_TOKEN_KEY) || '',
        },
    });
    // .interceptors.response.use(
    //     (response) => response,
    //     (error) => {
    //         if (error instanceof AxiosError && error.response?.status === 401) {
    //             if (!window.location.toString().match(/login$/)) {
    //                 window.location.href = '/login';
    //             }
    //         }
    //     }
    // );
};

export const $api = generateAxios('application/json');
export const $apiFormData = generateAxios('multipart/form-data');
