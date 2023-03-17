import { Link } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Navigation/Link',
  component: Link,
  argTypes: {
    isSmall: { type: 'boolean', defaultValue: 'false' },
    disabled: { type: 'boolean', defaultValue: 'false' },
    href: { table: { disable: true } },
    title: { type: 'string' },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: 'Hello', href: '/' } };
export const Disabled: Story = { args: { children: 'Hello', href: '/', disabled: true } };
export const Small: Story = { args: { children: 'Small link', href: '/', isSmall: true } };
export const SmallDisabled: Story = { args: { children: 'Small link', href: '/', isSmall: true, disabled: true } };
export const WithTitle: Story = { args: { children: 'Small link', href: '/', title: 'Open folder page' } };
