import { InputHTMLAttributes, useEffect, useRef } from 'react';
import Inputmask from 'inputmask';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    inputRef?: (ref: any) => void;
    mask?: string;
    maskOptions?: any;
}

export const Input = (props: InputProps) => {
    const { className, value, onChange, inputRef, mask, maskOptions, ...otherProps } = props;

    const inputRefValue = useRef(null);
    if (inputRefValue.current && (mask || maskOptions)) new Inputmask(mask, maskOptions).mask(inputRefValue.current);

    useEffect(() => {
        if (inputRef) inputRef(inputRefValue.current);
    }, [inputRefValue.current]);

    return (
        <input
            ref={inputRefValue}
            className={classNames(cls.Input, {}, [className])}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            {...otherProps}
        />
    );
};
