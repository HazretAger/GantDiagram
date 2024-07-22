import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { HInput } from '@/shared/ui/FormComponents';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import { useSignInByEmail } from '../../lib/query/useSignInByEmail';
import cls from './AuthByEmail.module.scss';

const AuthByEmailSchema = z.object({
    email: z.string().email('email написан некоректно'),
    password: z.string().min(5, { message: 'Введите не менее 5 символов' }),
});

export type AuthByEmailType = z.infer<typeof AuthByEmailSchema>;

interface AuthByEmailProps {
    className?: string;
}

const defaultValues = {
    email: '',
    password: '',
};

export const AuthByEmail = (props: AuthByEmailProps) => {
    const { className } = props;
    const { mutate: onAuth, isPending } = useSignInByEmail();

    const methods = useForm<AuthByEmailType>({
        defaultValues,
        resolver: zodResolver(AuthByEmailSchema),
    });

    const { handleSubmit } = methods;

    const submitHandler = async (loginData: AuthByEmailType) => {
        onAuth(loginData);
    };

    return (
        <div className={classNames(cls.AuthByEmail, {}, [className])}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <HInput //
                        className={cls.field}
                        name="email"
                        placeholder="Введите email"
                    />
                    <HInput //
                        className={cls.field}
                        name="password"
                        placeholder="Введите пароль"
                        type="password"
                    />
                    <Button
                        theme={ButtonTheme.PRIMARY}
                        size={ButtonSize.XL}
                        type="submit"
                        showSpinner={isPending}
                        disabled={isPending}
                    >
                        Сохранить
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};
