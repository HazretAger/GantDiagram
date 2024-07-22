import { useQuery } from '@tanstack/react-query';
import { fetchPostById } from '../../api/fetchPostById';

export const useFetchPostById = (postId: number | undefined) => {
    return useQuery({
        queryKey: ['fetchPostById', postId],
        queryFn: () => fetchPostById(postId || 1),
        enabled: !!postId,
    });
};
