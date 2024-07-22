import { ReactNode, useEffect, useId, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import Checkmark from '@/shared/assets/icons/checkmark.svg?react';
import cls from './Checkbox.module.scss';

interface CheckboxProps {
    className?: string;
    name: string;
    children: ReactNode;
    onChange?: (value: string) => void;
    inputRef?: (ref: any) => void;
}
export const Checkbox = (props: CheckboxProps) => {
    const { className, name, children, onChange, inputRef } = props;
    const checkboxId = useId();
    const inputRefValue = useRef(null);

    useEffect(() => {
        if (inputRef) inputRef(inputRefValue.current);
    }, [inputRefValue.current]);

    return (
        <div className={classNames(cls.Checkbox, {}, [className])}>
            <input //
                id={checkboxId}
                className={`${cls.input} visually-hidden`}
                ref={inputRefValue}
                name={name}
                type="checkbox"
                onChange={(e) => onChange?.(e.target.value)}
            />
            <label htmlFor={checkboxId} className={cls.name}>
                <div className={cls.window}>
                    <Checkmark className={cls.iconMark} />
                </div>
                <div className={cls.content}>{children}</div>
            </label>
        </div>
    );
};
