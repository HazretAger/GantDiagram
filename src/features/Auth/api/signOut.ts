import { $api } from '@/shared/api/axiosInstance';

type LogoutResponse = {
    status: number;
    message: string;
};

export const signOut = async () => {
    const { data } = await $api.post<LogoutResponse>(`/logout`);

    return data;
};
