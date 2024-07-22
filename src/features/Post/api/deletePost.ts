import { $api } from '@/shared/api/axiosInstance';

type DeletePostProps = {
    post_id: number;
};
type DeletePostResponse = {
    status: number;
    message: string;
};

export const deletePost = async (props: DeletePostProps) => {
    const { data } = await $api.post<DeletePostResponse>(`/posts/delete`, props);

    return data;
};
