import { Card } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';
import { action } from '@storybook/addon-actions';

const variants = ['default', 'defaultOnWhite', 'highlight', 'selected'];

const meta = {
  title: 'Card',
  component: Card,
  args: {
    onClick: undefined,
  },
  argTypes: {
    children: {
      control: 'select',
      options: ['with children', 'empty'],
      mapping: {
        'with children': <p>I'm a children</p>,
        empty: undefined,
      },
      table: { type: { summary: 'React.ReactNode' } },
    },
    variant: {
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(variants) } },
      options: variants,
    },
    onClick: {
      action: 'clicked',
      type: 'function',
      table: { type: { summary: '() => void' } },
    },
    title: { description: 'The title of the card', table: { type: { summary: 'string' } } },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "I'm a title" },
};

export const DefaultOnWhite: Story = {
  args: { title: "I'm a title", variant: 'defaultOnWhite' },
};

export const Highlight: Story = {
  args: { title: "I'm a title", variant: 'highlight' },
};

export const Selected: Story = {
  args: { title: "I'm a title", variant: 'selected' },
};

export const Clickable: Story = {
  args: { title: "I'm a title", onClick: action('clicked') },
};
