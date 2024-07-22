// import { classNames } from 'shared/lib/helpers/classNames/classNames';
import LoaderIcon from '@/shared/assets/img/common/preloader-puf.svg?react';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => <LoaderIcon className={className} />;
