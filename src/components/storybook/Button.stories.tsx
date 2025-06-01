// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import Button1, {Button1Props} from "@/components/common/Button1";

const meta: Meta<typeof Button1Props> = {
    title: 'Components/Button',
    component: Button1,
    argTypes: {
        type: {
            control: 'select',
            options: ['primary', 'secondary', 'outline', 'outline2', 'ghost'],
        },
        status: {
            control: 'select',
            options: ['default', 'hover', 'click', 'disabled'],
        },
        size: {
            control: 'select',
            options: ['lg', 'md', 'sm'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button1Props>;

export const Default: Story = {
    args: {
        label: '버튼',
        type: "ghost",
        size: 'md',
        status: "disabled",
    },
};
