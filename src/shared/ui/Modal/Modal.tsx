import React, { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import ModalClose from '@/shared/assets/icons/input-close.svg?react';
import cls from './Modal.module.scss';

export enum ModalTheme {
    ON_SIDE = 'onSide',
}
interface ModalProps {
    className?: string;
    classNameContent?: string;
    children: ReactNode;
    theme?: string;
    isOpen: boolean;
    onClose: () => void;
}
export const Modal = (props: ModalProps) => {
    const { className, classNameContent, children, theme = '', isOpen, onClose } = props;
    const mods = { [cls.opened]: isOpen };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.Modal, mods, [className, cls[theme]])}>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div className={cls.container} onClick={closeHandler}>
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div className={classNames(cls.content, {}, [classNameContent])} onClick={onContentClick}>
                    <Button className={cls.close} onClick={closeHandler}>
                        <ModalClose className={cls.closeIcon} />
                    </Button>
                    {children}
                </div>
            </div>
        </div>
    );
};
