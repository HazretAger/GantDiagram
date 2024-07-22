import { $api } from '@/shared/api/axiosInstance';
import { PostType } from '@/entities/Post';
import { PostFormType } from '../ui/PostForm/PostForm';

type CreatePostProps = {
    user_id: number;
} & PostFormType;

type CreatePostResponse = {
    status: number;
    message: string;
    post: PostType;
};

export const createPost = async (props: CreatePostProps) => {
    const { data } = await $api.post<CreatePostResponse>(`/posts/create`, props);

    return data;
};
