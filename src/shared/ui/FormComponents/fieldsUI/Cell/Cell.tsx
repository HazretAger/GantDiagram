import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Cell.module.scss';

interface CellProps {
    className?: string;
    label?: string;
    withoutBorder?: boolean;
    fieldError?: any;
    noteText?: ReactNode;
    children: ReactNode;
}

export const Cell = (props: CellProps) => {
    const { className, label, withoutBorder, fieldError, noteText, children } = props;

    return (
        <div className={classNames(cls.Cell, {}, [className])}>
            {!withoutBorder && (
                <div className={cls.content}>
                    <label className={cls.name}>{label || ''}</label>
                    <div className={cls.data}>{children}</div>
                </div>
            )}
            {noteText && <div className={cls.note}>{noteText}</div>}
            {withoutBorder && children}
            {fieldError && <div className={cls.errorMessage}>{fieldError.message || 'Заполните поле'}</div>}
        </div>
    );
};
