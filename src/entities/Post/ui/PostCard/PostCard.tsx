import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { PostType } from '../../model/types/post';
import cls from './PostCard.module.scss';

interface PostCardProps {
    className?: string;
    post: PostType;
    editButton?: ReactNode;
    deleteButton?: ReactNode;
}

export const PostCard = (props: PostCardProps) => {
    const { className, post, editButton, deleteButton } = props;

    return (
        <div className={classNames(cls.PostCard, {}, [className])}>
            <div className={cls.content}>
                <div className={cls.name}>{post.title}</div>
                <div className={cls.buttons}>
                    {editButton}
                    {deleteButton}
                </div>
            </div>
        </div>
    );
};
