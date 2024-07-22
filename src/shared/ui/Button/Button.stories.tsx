import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import Location from '@/shared/assets/icons/location.svg?react';
import UserIcon from '@/shared/assets/icons/user.svg?react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: 'color' },
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Нажми меня',
        size: ButtonSize.XL,
    },
};

export const PrimaryWithIcon: Story = {
    args: {
        theme: ButtonTheme.PRIMARY,
        children: 'Нажми меня',
        size: ButtonSize.XL,
        icon: <UserIcon />,
    },
};

export const Navigation: Story = {
    args: {
        theme: ButtonTheme.NAVIGATION,
        children: 'Нажми меня',
    },
};

export const NavigationIcon: Story = {
    args: {
        theme: ButtonTheme.NAVIGATION,
        children: 'Нажми меня',
        icon: <Location />,
    },
};
