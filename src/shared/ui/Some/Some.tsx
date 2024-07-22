import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Some.module.scss';

interface SomeProps {
    className?: string;
}

export const Some = (props: SomeProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Some, {}, [className])}>
            <p>Some</p>
        </div>
    );
};
