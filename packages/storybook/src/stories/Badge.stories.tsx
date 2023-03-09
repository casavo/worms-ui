import { Badge, BadgeVariant, Box, spacings } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const variants = Object.keys(BadgeVariant);

const meta = {
  title: 'Badge',
  component: Badge,
  argTypes: {
    inverted: { type: 'boolean', defaultValue: 'false' },
    withIcon: { type: 'boolean', defaultValue: 'false' },
    variant: {
      control: 'select',
      options: variants,
      table: { type: { summary: getTypeDelimitedWithPipe(variants) } },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { children: 'Success' },
  decorators: [
    (Story) => (
      <Box style={{ gap: spacings.m }} display="flex" flexDirection="column">
        <Story />
      </Box>
    ),
  ],
};

export const SuccessInverted: Story = { args: { children: 'Success', inverted: true } };
export const Warning: Story = { args: { children: 'Warning', variant: 'warning' } };
export const WarningInverted: Story = { args: { children: 'Warning', variant: 'warning', inverted: true } };
export const Error: Story = { args: { children: 'Error', variant: 'error' } };
export const ErrorInverted: Story = { args: { children: 'Error', variant: 'error', inverted: true } };
