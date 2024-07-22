import { classNames } from '@/shared/lib/classNames/classNames';
import { Theme, useTheme } from '@/app/providers/ThemeProviders';
import Sun from '@/shared/assets/icons/sun.svg?react';
import Moon from '@/shared/assets/icons/moon.svg?react';
import { Button } from '@/shared/ui/Button';
import cls from './ThemeButton.module.scss';

interface ThemeButtonProps {
    className?: string;
}

export const ThemeButton = (props: ThemeButtonProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeButton, {}, [className])}
            onClick={() => toggleTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)}
            icon={theme === Theme.DARK ? <Sun /> : <Moon />}
        />
    );
};
