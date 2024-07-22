import { TextareaHTMLAttributes, useEffect, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>;

interface TextareaProps extends HTMLTextareaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    inputRef?: (ref: any) => void;
}

export const Textarea = (props: TextareaProps) => {
    const { className, value, onChange, inputRef, ...otherProps } = props;
    const inputRefValue = useRef(null);

    useEffect(() => {
        if (inputRef) inputRef(inputRefValue.current);
    }, [inputRefValue.current]);

    return (
        <textarea
            className={classNames(cls.Textarea, {}, [className])}
            ref={inputRefValue}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            {...otherProps}
        />
    );
};
