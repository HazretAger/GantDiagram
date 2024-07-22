import { Burger } from '@/shared/ui/Burger';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSideMenuStore } from '../../model/store/useSideMenuStore';
import cls from './SideMenuButton.module.scss';

interface SideMenuButtonProps {
    className?: string;
}

export const SideMenuButton = (props: SideMenuButtonProps) => {
    const { className } = props;
    const isSideMenuActive = useSideMenuStore((state) => state.isSideMenuActive);
    const toggleSideMenu = useSideMenuStore((state) => state.toggleSideMenu);

    return (
        <Burger
            className={classNames(cls.SideMenuButton, {}, [className])}
            isBurgerActive={isSideMenuActive}
            onClick={toggleSideMenu}
        />
    );
};
