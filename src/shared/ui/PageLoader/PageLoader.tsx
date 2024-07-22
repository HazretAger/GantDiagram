import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
    text?: string;
}

export const PageLoader = ({ className, text }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <div className={cls.container}>
            <div className={cls.box}>
                <Loader className={cls.icon} />
            </div>
            {text && <div className={cls.text}>{text}</div>}
        </div>
    </div>
);
