import { ReactNode } from 'react';
import { Controller, FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HCheckbox.module.scss';
import { Cell } from '@/shared/ui/FormComponents/fieldsUI/Cell/Cell';
import { Checkbox } from '@/shared/ui/FormComponents/fieldsUI/Checkbox/Checkbox';

interface HCheckboxProps {
    className?: string;
    name: string;
    label?: string;
    children?: ReactNode;
    noteText?: ReactNode;
    registerOptions?: Omit<RegisterOptions<FieldValues, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export const HCheckbox = (props: HCheckboxProps) => {
    const { className, name, label, children, noteText, registerOptions } = props;
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={registerOptions}
            render={({ field, fieldState }) => (
                <Cell
                    className={classNames(cls.HRadioButtons, {}, [className])}
                    label={label}
                    noteText={noteText}
                    fieldError={fieldState.error}
                    withoutBorder
                >
                    <Checkbox //
                        name={field.name}
                        onChange={field.onChange}
                        inputRef={field.ref}
                    >
                        {children}
                    </Checkbox>
                </Cell>
            )}
        />
    );
};
