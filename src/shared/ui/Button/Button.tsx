import { ButtonHTMLAttributes, FC, ReactNode, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ButtonSpinner from '@/shared/assets/icons/buttonSpinner.svg?react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    PRIMARY = 'primary',
    NAVIGATION = 'navigation',
}

export enum ButtonSize {
    XL = 'xl',
    L = 'l',
    M = 'm',
    S = 's',
    NULL = 'null',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    size?: ButtonSize;
    reverse?: boolean;
    showSpinner?: boolean;
    className?: string;
    icon?: ReactNode;
    width?: string;
}
export const Button: FC<ButtonProps> = (props) => {
    const { className, children, reverse, theme = '', icon, showSpinner, width = 'auto', size = '', ...otherProps } = props;

    const $button = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        if ($button.current) $button.current.style.setProperty('--custom-width', width);
    }, []);

    const mods = {
        [cls.reverse]: reverse,
    };

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            ref={$button}
            {...otherProps}
        >
            {showSpinner && (
                <span className={classNames(cls.spinnerBox, {}, [])}>
                    <ButtonSpinner className={cls.spinner} />
                </span>
            )}
            {icon && <span className={classNames(cls.icon, {}, [])}>{icon}</span>}
            {children && <span className={cls.text}>{children}</span>}
        </button>
    );
};
