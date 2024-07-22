import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../api/fetchPosts';

export const useFetchPosts = () => {
    return useQuery({
        queryKey: ['fetchPosts'],
        queryFn: () => fetchPosts(),
    });
};
