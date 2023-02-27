import { Text, fontWeight, theme } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';
type a = keyof JSX.IntrinsicElements;

const meta = {
  title: 'Text',
  component: Text,
  argTypes: {
    children: {
      control: 'text',
      type: { required: true, name: 'string' },
      table: { type: { summary: 'React.ReactNode' } },
    },
    weight: {
      options: Object.keys(fontWeight),
      control: 'radio',
      table: { type: { summary: getTypeDelimitedWithPipe(Object.keys(fontWeight)) } },
    },
    color: {
      options: Object.keys(theme.textColor),
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(Object.keys(theme.textColor)) } },
    },
    as: {
      options: ['a', 'h1', 'h2', 'h3', 'h4', 'div', 'p'],
      control: 'select',
      table: { type: { summary: 'keyof JSX.IntrinsicElements' } },
      description: 'Tag HTML',
    },
    variant: {
      options: Object.keys(theme.desktopFontSizes),
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(Object.keys(theme.desktopFontSizes)) } },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Hello!' },
};
