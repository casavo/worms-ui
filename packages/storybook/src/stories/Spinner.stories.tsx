import { Box, Spinner } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const variants = ['primary', 'secondary'];

const meta = {
  title: 'Spinner',
  component: Spinner,
  argTypes: {
    variant: {
      options: variants,
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(variants) } },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'primary' },
  decorators: [
    (Story) => (
      <Box display="flex" gap="m" padding="m" background="deepGreen100">
        <Story />
      </Box>
    ),
  ],
};
