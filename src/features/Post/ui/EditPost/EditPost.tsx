import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { usePostStore } from '../../model/store/usePostStore';
import cls from './EditPost.module.scss';

interface EditPostProps {
    className?: string;
    postId: number;
}

export const EditPost = (props: EditPostProps) => {
    const { className, postId } = props;
    const toggleModal = usePostStore((state) => state.toggleModal);
    const changingEditablePost = usePostStore((state) => state.changingEditablePost);

    const openEditPostForm = (id: number) => {
        changingEditablePost(id);
        toggleModal();
    };

    return (
        <Button
            className={classNames(cls.EditPost, {}, [className])}
            theme={ButtonTheme.PRIMARY}
            size={ButtonSize.S}
            onClick={() => openEditPostForm(postId)}
        >
            Изменить
        </Button>
    );
};
