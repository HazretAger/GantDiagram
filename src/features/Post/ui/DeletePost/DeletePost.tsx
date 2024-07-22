import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useDeletePost } from '../../lib/query/useDeletePost';
import cls from './DeletePost.module.scss';

interface DeletePostProps {
    className?: string;
    postId: number;
}

export const DeletePost = (props: DeletePostProps) => {
    const { className, postId } = props;
    const { mutate: onDelete } = useDeletePost();

    return (
        <Button
            className={classNames(cls.DeletePost, {}, [className])}
            theme={ButtonTheme.PRIMARY}
            size={ButtonSize.S}
            onClick={() => onDelete({ post_id: postId })}
        >
            Удалить
        </Button>
    );
};
