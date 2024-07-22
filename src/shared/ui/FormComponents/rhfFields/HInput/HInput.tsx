import { InputHTMLAttributes, ReactNode } from 'react';
import { Controller, FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '../../fieldsUI/Input/Input';
import { Cell } from '../../fieldsUI/Cell/Cell';
import cls from './HInput.module.scss';

interface HInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'name'> {
    className?: string;
    name: string;
    label?: string;
    noteText?: ReactNode;
    mask?: string;
    maskOptions?: any;
    registerOptions?: Omit<RegisterOptions<FieldValues, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export const HInput = (props: HInputProps) => {
    const { className, name, label, noteText, mask, maskOptions, registerOptions, ...otherProps } = props;
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={registerOptions}
            render={({ field, fieldState }) => (
                <Cell //
                    className={classNames(cls.HInput, {}, [className])}
                    label={label}
                    noteText={noteText}
                    fieldError={fieldState.error}
                >
                    <Input
                        name={field.name}
                        inputRef={field.ref}
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        value={field.value ?? ''}
                        mask={mask}
                        maskOptions={maskOptions}
                        {...otherProps}
                    />
                </Cell>
            )}
        />
    );
};
