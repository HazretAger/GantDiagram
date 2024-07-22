import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updatePost } from '../../api/updatePost';

export const useUpdatePost = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updatePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['fetchPosts'] });
        },
    });
};
