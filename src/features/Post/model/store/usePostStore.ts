import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { PostSchema } from '../types/postSchema';

export const usePostStore = create<PostSchema>()(
    devtools((set, get) => ({
        isModalActive: false,
        editablePost: undefined,
        toggleModal: () => set({ isModalActive: !get().isModalActive }),
        changingEditablePost: (postId) => set({ editablePostId: postId }),
    }))
);
