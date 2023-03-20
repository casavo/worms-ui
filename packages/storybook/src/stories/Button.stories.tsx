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
    iconPosition: {
      options: iconPosition,
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(iconPosition) } },
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
export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Hello',
    icon: (props) => (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M8.0058 1.33325L14.6668 5.03696V14.6666H1.3335V5.03696L8.0058 1.33325ZM8.00516 3.23909L3.00016 6.01742V12.9999H13.0002V6.01659L8.00516 3.23909Z" />
      </svg>
    ),
  },
};
