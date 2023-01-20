import { Box, colors, spacings } from '@casavo/worms-ui';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Box',
  component: Box,
  argTypes: {
    color: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    background: {
      options: Object.keys(colors),
      control: { type: 'select' },
    },
    padding: {
      options: Object.keys(spacings),
      control: { type: 'select' },
    },
    label: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box color={args.color} background={args.background} padding={args.padding}>
    {args.label}
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  color: 'white',
  background: 'orange600',
  padding: 'l',
  label: 'Hello!',
};
