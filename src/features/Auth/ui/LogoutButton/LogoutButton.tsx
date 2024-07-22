import { useSignOut } from '@/features/Auth';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './LogoutButton.module.scss';

interface LogoutButtonProps {
    className?: string;
}

export const LogoutButton = (props: LogoutButtonProps) => {
    const { className } = props;
    const { mutate: onLogout } = useSignOut();

    return (
        <Button
            className={classNames(cls.LogoutButton, {}, [className])}
            theme={ButtonTheme.NAVIGATION}
            onClick={() => onLogout()}
        >
            Выйти
        </Button>
    );
};
