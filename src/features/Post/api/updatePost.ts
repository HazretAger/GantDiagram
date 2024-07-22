import { $api } from '@/shared/api/axiosInstance';
import { PostFormType } from '../ui/PostForm/PostForm';

type UpdatePostProps = {
    post_id: number;
    user_id: number;
} & PostFormType;

type UpdatePostResponse = {
    status: number;
    message: string;
};

export const updatePost = async (props: UpdatePostProps) => {
    const { data } = await $api.post<UpdatePostResponse>(`/posts/update`, props);

    return data;
};
