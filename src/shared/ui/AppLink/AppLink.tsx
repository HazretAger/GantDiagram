import { Link, LinkProps } from 'react-router-dom';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    NAVIGATION = 'navigation',
}

export enum AppLinkSize {
    XL = 'xl',
    L = 'l',
    M = 'm',
    S = 's',
    XS = 'xs',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
    icon?: ReactNode;
    reverse?: boolean;
    width?: string;
    size?: AppLinkSize;
}

export const AppLink: FC<AppLinkProps> = props => {
    const { to, className, children, reverse, theme = '', icon, width = 'auto', size = '', ...otherProps } = props;

    const $link = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        if ($link.current) $link.current.style.setProperty('--custom-width', width);
    }, []);

    const mods = {
        [cls.reverse]: reverse,
    };

    return (
        <Link to={to} className={classNames(cls.AppLink, mods, [className, cls[theme], cls[size]])} ref={$link} {...otherProps}>
            {icon && <span className={classNames(cls.icon, { [cls.mr12]: !!icon }, [])}>{icon}</span>}
            {children && <span className={cls.text}>{children}</span>}
        </Link>
    );
};
