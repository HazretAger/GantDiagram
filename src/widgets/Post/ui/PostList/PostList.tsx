import { DeletePost, EditPost } from '@/features/Post';
import { PostCard, useFetchPosts } from '@/entities/Post';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './PostList.module.scss';

interface PostListProps {
    className?: string;
}

export const PostList = (props: PostListProps) => {
    const { className } = props;
    const { data, isPending, isError } = useFetchPosts();

    if (isPending) {
        return <div>...Идет загрузка</div>;
    }
    if (isError) {
        return <div>Произошла непредвиденная ошибка</div>;
    }

    return (
        <div className={classNames(cls.PostList, {}, [className])}>
            {data?.map((post) => (
                <PostCard
                    key={post.id}
                    post={post}
                    editButton={<EditPost postId={post.id} />}
                    deleteButton={<DeletePost postId={post.id} />}
                />
            ))}
        </div>
    );
};
