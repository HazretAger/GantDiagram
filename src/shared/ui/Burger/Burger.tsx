import { KeyboardEvent } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Burger.module.scss';

interface BurgerProps {
    className?: string;
    isBurgerActive: boolean;
    onClick: () => void;
}
export const Burger = ({ className, isBurgerActive, onClick }: BurgerProps) => {
    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <div
            className={classNames(cls.Burger, { [cls.active]: isBurgerActive }, [className])}
            onClick={onClick}
            onKeyDown={(e: KeyboardEvent<HTMLElement>) => e.code === 'Enter' && onClick()}
            role="button"
            tabIndex={0}
        >
            <span className={cls.burger__strip} />
        </div>
    );
};
