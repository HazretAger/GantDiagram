import { Menu } from '@/features/Menu';
import { Wrapper } from '@/shared/ui/Wrapper';
import { LogoutButton } from '@/features/Auth';
import { SideMenuButton } from '@/features/SideMenu';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}
export const Header = (props: HeaderProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Wrapper>
                <div className={cls.content}>
                    <div className={cls.logo}>{/* <AppLink to="/" icon={<Logo className={cls.logoIcon} />} /> */}</div>
                    <div className={cls.block}>
                        <Menu />
                        <LogoutButton />
                        <SideMenuButton />
                        {/* <ThemeButton /> */}
                    </div>
                </div>
            </Wrapper>
        </header>
    );
};
