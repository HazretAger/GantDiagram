import { z } from 'zod';
import { IRadioButtons } from '@/shared/ui/FormComponents/fieldsUI/RadioButtons/RadioButtons';

export const AllFieldFormSchema = z.object({
    textInput: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255),
    maskIInput: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255)
        .regex(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, { message: 'Укажите верный формат телефона' }),
    maskIInputLatin: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255),
    radioButton: z //
        .string()
        .min(1, { message: 'Заполните поле' })
        .max(255),
});

export type AllFieldFormType = z.infer<typeof AllFieldFormSchema>;

export const defaultValues = {
    textInput: '',
    maskIInput: '',
    maskIInputLatin: '',
    radioButton: '',
};

export const allFieldFormRadioData: IRadioButtons[] = [
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
