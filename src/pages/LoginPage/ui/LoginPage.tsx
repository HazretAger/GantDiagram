import { Wrapper } from '@/shared/ui/Wrapper';
import { AuthByEmail } from '@/features/Auth';
import cls from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div>
            <Wrapper>
                <div className={cls.formBlock}>
                    <h2 className={cls.title}>Авторизация</h2>
                    <AuthByEmail />
                </div>
            </Wrapper>
        </div>
    );
};

export default LoginPage;
