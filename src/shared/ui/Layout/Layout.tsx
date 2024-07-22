import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Layout.module.scss';

interface LayoutProps {
    className?: string;
    headerSlot: ReactNode;
    pageSlot: ReactNode;
    sideMenuSlot: ReactNode;
}
export const Layout = (props: LayoutProps) => {
    const { className, headerSlot, pageSlot, sideMenuSlot } = props;

    return (
        <div className={classNames(cls.Layout, {}, [className])}>
            {headerSlot}
            <main className={cls.content}>{pageSlot}</main>
            {sideMenuSlot}
        </div>
    );
};
