import { Badge, BadgeVariant, Box, spacings } from '@casavo/worms-ui';
import { BadgeVariantUnion } from '@casavo/worms-ui/dist/components/Badge/Badge.css';
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

export const AllBadge: Story = {
  args: { children: 'Success' },
  decorators: [
    (Story) => {
      return (
        <Box display="flex" gap="m" flexWrap="wrap">
          <Box display="flex" gap="m" flexWrap="wrap">
            <Story />
            {variants.map((v) => (
              <Badge variant={v as BadgeVariantUnion}>{v}</Badge>
            ))}
          </Box>

          <Box display="flex" gap="m" flexWrap="wrap">
            {variants.map((v) => (
              <Badge variant={v as BadgeVariantUnion} withIcon>
                {v}
              </Badge>
            ))}
          </Box>

          <Box display="flex" gap="m" flexWrap="wrap">
            {variants.map((v) => (
              <Badge variant={v as BadgeVariantUnion} inverted>
                {v} inverted
              </Badge>
            ))}
          </Box>

          <Box display="flex" gap="m" flexWrap="wrap">
            {variants.map((v) => (
              <Badge variant={v as BadgeVariantUnion} inverted withIcon>
                {v} inverted
              </Badge>
            ))}
          </Box>
        </Box>
      );
    },
  ],
};

export const Default: Story = { args: { children: 'Hello!' } };
