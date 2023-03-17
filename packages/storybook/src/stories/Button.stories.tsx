import { Button } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const variants = ['primary', 'secondary'];

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
      control: 'select',
      options: ['sample text', 'empty'],
      mapping: {
        'sample text': <>I'm a button text</>,
        empty: null,
      },
      table: { type: { summary: 'React.ReactNode' } },
    },
    type: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { variant: 'primary', children: <>Button</> } };
export const PrimaryDisabled: Story = { args: { variant: 'primary', disabled: true, children: <>Button</> } };
export const PrimaryLoading: Story = { args: { variant: 'primary', loading: true, children: <>Button</> } };
export const Secondary: Story = { args: { variant: 'primary', children: <>Button</> } };
export const SecondaryDisabled: Story = { args: { variant: 'primary', disabled: true, children: <>Button</> } };
export const SecondaryLoading: Story = { args: { variant: 'primary', loading: true, children: <>Button</> } };
