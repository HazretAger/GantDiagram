import { ReactNode, TextareaHTMLAttributes } from 'react';
import { Controller, FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Cell } from '@/shared/ui/FormComponents/fieldsUI/Cell/Cell';
import { Textarea } from '../../fieldsUI/Textarea/Textarea';
import cls from './HTextarea.module.scss';

interface HTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'name'> {
    className?: string;
    name: string;
    label?: string;
    noteText?: ReactNode;
    registerOptions?: Omit<RegisterOptions<FieldValues, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export const HTextarea = (props: HTextareaProps) => {
    const { className, name, label, noteText, registerOptions, ...otherProps } = props;
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={registerOptions}
            render={({ field, fieldState }) => (
                <Cell //
                    className={classNames(cls.HTextarea, {}, [className])}
                    label={label}
                    noteText={noteText}
                    fieldError={fieldState.error}
                >
                    <Textarea
                        name={field.name}
                        inputRef={field.ref}
                        onBlur={field.onBlur}
                        onChange={field.onChange}
                        value={field.value ?? ''}
                        {...otherProps}
                    />
                </Cell>
            )}
        />
    );
};
