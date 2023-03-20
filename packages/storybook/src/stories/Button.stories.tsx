import { Button } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const variants = ['primary', 'secondary'];
const iconPosition = ['left', 'right'];

const meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { type: 'boolean', defaultValue: 'false' },
    loading: { type: 'boolean', defaultValue: 'false' },
    variant: {
      options: variants,
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(variants) } },
    },
    children: {
      control: 'text',
      type: { required: true, name: 'string' },
      table: { type: { summary: 'React.ReactNode' } },
    },
    type: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary', children: 'Hello' } };
export const PrimaryDisabled: Story = { args: { variant: 'primary', disabled: true, children: 'Hello' } };
export const PrimaryLoading: Story = { args: { variant: 'primary', loading: true, children: 'Hello' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Hello' } };
export const SecondaryDisabled: Story = { args: { variant: 'secondary', disabled: true, children: 'Hello' } };
export const SecondaryLoading: Story = { args: { variant: 'secondary', loading: true, children: 'Hello' } };
