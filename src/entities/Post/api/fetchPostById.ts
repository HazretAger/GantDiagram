import { PostType } from '../model/types/post';
import { $api } from '@/shared/api/axiosInstance';

type FetchPostByIdProps = number;
type FetchPostByIdResponse = PostType;

export const fetchPostById = async (postId: FetchPostByIdProps) => {
    const { data } = await $api.get<FetchPostByIdResponse>(`/posts/${postId}`);

    return data;
};
