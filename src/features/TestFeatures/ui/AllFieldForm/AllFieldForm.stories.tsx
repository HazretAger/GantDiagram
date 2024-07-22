import type { Meta, StoryObj } from '@storybook/react';
import { AllFieldForm } from './AllFieldForm';

const meta = {
    title: 'Features/AllFieldForm',
    component: AllFieldForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AllFieldForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
