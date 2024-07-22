import { Modal } from '@/shared/ui/Modal';
import { Portal } from '@/shared/ui/Portal';
import { PostForm, usePostStore } from '@/features/Post';

export const EditPostModal = () => {
    const isModalActive = usePostStore((state) => state.isModalActive);
    const toggleModal = usePostStore((state) => state.toggleModal);

    return (
        <Portal>
            <Modal isOpen={isModalActive} onClose={toggleModal}>
                <PostForm />
            </Modal>
        </Portal>
    );
};
