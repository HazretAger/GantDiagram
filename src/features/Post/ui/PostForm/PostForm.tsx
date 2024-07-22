import { z } from 'zod';
import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { useFetchPostById } from '@/entities/Post';
import { HInput } from '@/shared/ui/FormComponents';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { usePostStore } from '../../model/store/usePostStore';
import { useUpdatePost } from '../../lib/query/useUpdatePost';
import { useCreatePost } from '../../lib/query/useCreatePost';
import cls from './PostForm.module.scss';

const PostFormSchema = z.object({
    title: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255),
    body: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255),
});

export type PostFormType = z.infer<typeof PostFormSchema>;

interface PostFormProps {
    className?: string;
}

const defaultValues = {
    title: '',
    body: '',
};

export const PostForm = (props: PostFormProps) => {
    const { className } = props;
    const editablePostId = usePostStore((state) => state.editablePostId);

    const { data, isError, isLoading } = useFetchPostById(editablePostId);
    const { mutate: create, isPending: isCreate } = useCreatePost();
    const { mutate: update, isPending: isUpdate } = useUpdatePost();

    const methods = useForm<PostFormType>({
        defaultValues,
        resolver: zodResolver(PostFormSchema),
    });

    const { handleSubmit, reset } = methods;

    useEffect(() => {
        if (data) {
            reset({
                title: data.title,
                body: data.body,
            });
        } else {
            reset(defaultValues);
        }
    }, [data]);

    const submitHandler = async (data: PostFormType) => {
        if (editablePostId) {
            update({ ...data, post_id: editablePostId!, user_id: 1 });
        } else {
            create({ ...data, user_id: 1 });
        }
    };

    if (isLoading) return <div>...Загружаем данные</div>;
    if (isError) return <div>Что то пошло не так</div>;

    return (
        <div className={classNames(cls.PostForm, {}, [className])}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <HInput //
                        className={cls.field}
                        name="title"
                        placeholder="Введите название"
                    />
                    <HInput //
                        className={cls.field}
                        name="body"
                        placeholder="Введите описание"
                    />
                    <Button
                        theme={ButtonTheme.PRIMARY}
                        size={ButtonSize.XL}
                        type="submit"
                        showSpinner={isCreate || isUpdate}
                        disabled={isCreate || isUpdate}
                    >
                        Сохранить
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};
