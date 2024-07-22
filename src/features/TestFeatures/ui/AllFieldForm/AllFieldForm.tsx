import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { HInput, HRadioButtons } from '@/shared/ui/FormComponents';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';
import cls from './AllFieldForm.module.scss';
import { regexMap } from '@/shared/lib/utils/regexMap';
import { IRadioButtons, RadioButtonsTheme } from '@/shared/ui/FormComponents/fieldsUI/RadioButtons/RadioButtons';
import { HCheckbox } from '@/shared/ui/FormComponents/rhfFields/HCheckbox/HCheckbox';
import { HTextarea } from '@/shared/ui/FormComponents/rhfFields/HTextarea/HTextarea';

const AllFieldFormSchema = z.object({
    textInput: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255),
    maskIInput: z //
        .string()
        // .min(1, { message: 'Заполните поле' })
        .max(255)
        .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, { message: 'Укажите верный формат телефона' }),
    maskIInputLatin: z //
        .string()
        // .min(1, { message: 'Заполните поле' })
        .max(255),
    radioButton: z //
        .string()
        // .min(1, { message: 'Выберите значение' })
        .max(255),
    radioButtonParam: z //
        .string()
        // .min(1, { message: 'Выберите значение' })
        .max(255),
    textarea: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255),
    checkbox: z.string(),
});

type AllFieldFormType = z.infer<typeof AllFieldFormSchema>;

interface AllFieldFormProps {
    className?: string;
}

const defaultValues = {
    textInput: '',
    maskIInput: '',
    maskIInputLatin: '',
    radioButton: '',
    radioButtonParam: '',
    checkbox: '',
    textarea: '',
};

export const AllFieldForm = (props: AllFieldFormProps) => {
    const { className } = props;
    const regex = regexMap.onlyRuSymbols;

    const methods = useForm<AllFieldFormType>({
        defaultValues,
        resolver: zodResolver(AllFieldFormSchema),
    });

    const { handleSubmit } = methods;

    const submitHandler = async (data: AllFieldFormType) => {
        console.log('data: ', data);
    };

    const radioData: IRadioButtons[] = [
        {
            labelName: 'Раз в квартал',
            value: '0',
        },
        {
            labelName: 'Раз в пол года',
            value: '1',
        },
        {
            labelName: 'Раз в год',
            value: '2',
        },
    ];

    const radioDataParam: IRadioButtons[] = [
        {
            labelName: 'Раз в квартал',
            value: '0',
        },
        {
            labelName: 'Раз в пол года',
            value: '1',
        },
        {
            labelName: 'Раз в год',
            value: '2',
        },
    ];

    return (
        <div className={classNames(cls.AllFieldForm, {}, [className])}>
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className={cls.grid}>
                        <HInput //
                            className={cls.field}
                            name="textInput"
                            label="Текстовое поле"
                            placeholder="Введите текст"
                        />
                        <HInput //
                            className={cls.field}
                            name="maskIInput"
                            label="Поле с маской"
                            placeholder="Введите маску"
                            mask="+7 (999) 999-99-99"
                            maskOptions={{ showMaskOnHover: false }}
                        />
                        <HInput //
                            className={cls.field}
                            name="maskIInputLatin"
                            label="Поле с вводом только русских букв"
                            placeholder="Введите только русские буквы"
                            maskOptions={{ regex: regex.source, showMaskOnHover: false }}
                        />
                        <HRadioButtons
                            theme={RadioButtonsTheme.PARAM}
                            className={cls.field}
                            name="radioButtonParam"
                            radioData={radioDataParam}
                            title="Заголовок"
                            // registerOptions={{ required: true }}
                        />
                        <HRadioButtons
                            className={cls.field}
                            name="radioButton"
                            radioData={radioData}
                            // registerOptions={{ required: true }}
                        />
                        <HCheckbox name="checkbox">Текст чекбокс</HCheckbox>
                        <HTextarea name="textarea" placeholder="Введите текст" />
                    </div>
                    <Button
                        theme={ButtonTheme.PRIMARY}
                        size={ButtonSize.XL}
                        type="submit"
                        // showSpinner={isAddUserLoading}
                        // disabled={isAddUserLoading}
                    >
                        Сохранить
                    </Button>
                </form>
            </FormProvider>
        </div>
    );
};
