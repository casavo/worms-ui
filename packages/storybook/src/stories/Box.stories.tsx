import { Box, colors, spacings } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Box',
  component: Box,
  argTypes: {
    color: { options: Object.keys(colors), control: { type: 'select' } },
    background: { options: Object.keys(colors), control: { type: 'select' } },
    padding: { options: Object.keys(spacings), control: { type: 'select' } },
    children: { control: 'text' },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'white',
    background: 'orange600',
    padding: 'l',
    children: 'Hello!',
  },
};
