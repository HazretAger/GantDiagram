import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Title.module.scss';

interface TitleProps {
    className?: string;
    positionCenter?: boolean;
    children: ReactNode;
}

export const Title = (props: TitleProps) => {
    const { className, positionCenter, children } = props;

    return (
        //
        <h2 className={classNames(cls.Title, { [cls.positionCenter]: positionCenter }, [className])}>{children}</h2>
    );
};
