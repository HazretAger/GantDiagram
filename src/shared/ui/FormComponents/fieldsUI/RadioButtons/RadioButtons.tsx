import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RadioButtons.module.scss';

export enum RadioButtonsTheme {
    PARAM = 'param',
}
export interface IRadioButtons {
    labelName: string;
    value: string | number;
}

interface RadioButtonsProps {
    className?: string;
    name: string;
    title?: string;
    data: IRadioButtons[];
    theme?: string;
    currentValue?: string | number;
    onChange?: (value: string) => void;
}

export const RadioButtons = (props: RadioButtonsProps) => {
    const { className, name, title, data, theme = '', currentValue, onChange } = props;

    return (
        <div className={classNames(cls.RadioButtons, {}, [className, cls[theme]])}>
            {title && <p className={cls.listTitle}>{title}</p>}
            <div className={cls.list}>
                {data.map((radioButton, index) => (
                    <div key={`${name + (index + 1)}`} className={cls.item}>
                        <input
                            id={`${name + (index + 1)}`}
                            type="radio"
                            name={name}
                            value={radioButton.value}
                            className={`${cls.input} visually-hidden`}
                            checked={radioButton.value === currentValue}
                            onChange={(e) => onChange?.(e.target.value)}
                        />
                        <label className={cls.name} htmlFor={`${name + (index + 1)}`}>
                            <span className={cls.window}>
                                <span className={cls.circle} />
                            </span>
                            <span className={cls.text}>{radioButton.labelName}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};
