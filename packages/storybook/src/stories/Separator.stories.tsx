import { Box, Separator, spacings, Text } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const orientations = ['horizontal', 'vertical'];

const meta = {
  title: 'Separator',
  component: Separator,
  argTypes: {
    orientation: {
      control: 'radio',
      options: orientations,
      table: { type: { summary: getTypeDelimitedWithPipe(orientations) } },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: { orientation: 'horizontal' },
  decorators: [
    (Story) => (
      <Box style={{ gap: spacings.m }} display="flex" flexDirection="column">
        <Text variant="description">Top</Text>
        <Story />
        <Text variant="description">Bottom</Text>
      </Box>
    ),
  ],
};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <Box style={{ gap: spacings.m }} display="flex" alignItems="center">
        <Text variant="description">Left</Text>
        <Story />
        <Text variant="description">Right</Text>
      </Box>
    ),
  ],
};
