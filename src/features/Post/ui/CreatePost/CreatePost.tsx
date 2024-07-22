import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CreatePost.module.scss';
import { usePostStore } from '@/features/Post';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface CreatePostProps {
    className?: string;
}

export const CreatePost = (props: CreatePostProps) => {
    const { className } = props;
    const toggleModal = usePostStore((state) => state.toggleModal);
    const changingEditablePost = usePostStore((state) => state.changingEditablePost);

    const openEditPostForm = () => {
        changingEditablePost(undefined);
        toggleModal();
    };

    return (
        <Button
            className={classNames(cls.CreatePost, {}, [className])}
            theme={ButtonTheme.PRIMARY}
            size={ButtonSize.XL}
            onClick={openEditPostForm}
        >
            Создать пост
        </Button>
    );
};
