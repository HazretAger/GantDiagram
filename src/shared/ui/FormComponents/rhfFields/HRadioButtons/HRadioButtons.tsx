import { ReactNode } from 'react';
import { Controller, FieldValues, RegisterOptions, useFormContext } from 'react-hook-form';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Cell } from '@/shared/ui/FormComponents/fieldsUI/Cell/Cell';
import { IRadioButtons, RadioButtons } from '@/shared/ui/FormComponents/fieldsUI/RadioButtons/RadioButtons';
import cls from './HRadioButtons.module.scss';

interface HRadioButtonsProps {
    className?: string;
    name: string;
    title?: string;
    label?: string;
    noteText?: ReactNode;
    radioData: IRadioButtons[];
    theme?: string;
    registerOptions?: Omit<RegisterOptions<FieldValues, string>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

export const HRadioButtons = (props: HRadioButtonsProps) => {
    const { className, name, title, label, noteText, radioData, theme, registerOptions } = props;
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
                    <RadioButtons
                        name={field.name}
                        title={title}
                        onChange={field.onChange}
                        currentValue={field.value}
                        data={radioData}
                        theme={theme}
                    />
                </Cell>
            )}
        />
    );
};
