import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Wrapper.module.scss';

export enum ThemeWrapper {
    PRIMARY = 'primary',
}

interface WrapperProps {
    className?: string;
    theme?: ThemeWrapper;
    children: ReactNode;
}
export const Wrapper: FC<WrapperProps> = props => {
    const { className, children, theme = '' } = props;

    return <div className={classNames(cls.Wrapper, {}, [className, cls[theme]])}>{children}</div>;
};
