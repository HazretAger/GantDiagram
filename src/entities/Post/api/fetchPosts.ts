import { PostType } from '../model/types/post';
import { $api } from '@/shared/api/axiosInstance';

type FetchPostsResponse = PostType[];

export const fetchPosts = async () => {
    const { data } = await $api.get<FetchPostsResponse>(`/posts?limit=5`);

    return data;
};
