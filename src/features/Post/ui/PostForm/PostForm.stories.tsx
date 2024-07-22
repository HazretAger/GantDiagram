import type { Meta, StoryObj } from '@storybook/react';
import { PostForm } from './PostForm';

const meta = {
    title: 'Features/PostForm',
    component: PostForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PostForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
