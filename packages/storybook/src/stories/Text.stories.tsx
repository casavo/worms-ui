import { Text, fontWeight, theme } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

type VariantUnion = keyof typeof theme.desktopFontSizes;

const variants = Object.keys(theme.desktopFontSizes) as VariantUnion[];

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
      options: variants,
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(variants) } },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

const children = 'The quick brown fox jumps over the lazy dog';
export const Display: Story = { args: { children, variant: 'display' } };
export const H1: Story = { args: { children, variant: 'h1' } };
export const H2: Story = { args: { children, variant: 'h2' } };
export const H3: Story = { args: { children, variant: 'h3' } };
export const H4: Story = { args: { children, variant: 'h4' } };
export const BodyL: Story = { args: { children, variant: 'bodyL' } };
export const BodyLBold: Story = { args: { children, variant: 'bodyL', weight: 'strong' } };
export const BodyM: Story = { args: { children, variant: 'bodyM' } };
export const BodyMBold: Story = { args: { children, variant: 'bodyM', weight: 'strong' } };
export const Description: Story = { args: { children, variant: 'description' } };
export const Caption: Story = { args: { children, variant: 'caption' } };
export const Small: Story = { args: { children, variant: 'small' } };
