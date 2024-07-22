import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Menu.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import Location from '@/shared/assets/icons/location.svg?react';

interface MenuProps {
    className?: string;
}

export const Menu = (props: MenuProps) => {
    const { className } = props;

    return (
        <nav className={classNames(cls.Menu, {}, [className])}>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <AppLink //
                        className={cls.blockItem}
                        to="/someTests"
                        theme={AppLinkTheme.NAVIGATION}
                        icon={<Location />}
                    >
                        Тестовая страница
                    </AppLink>
                </li>
                <li className={cls.item}>
                    <AppLink //
                        to="/contact"
                        className={cls.blockItem}
                        theme={AppLinkTheme.NAVIGATION}
                    >
                        Контакты
                    </AppLink>
                </li>
            </ul>
        </nav>
    );
};
