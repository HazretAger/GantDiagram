export interface PostSchema {
    isModalActive: boolean;
    editablePostId?: number;
    toggleModal: () => void;
    changingEditablePost: (postId?: number) => void;
}
