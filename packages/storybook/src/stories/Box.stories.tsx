import { Box } from '@casavo/worms-ui';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Box',
  component: Box,
  parameters: {},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box background="deepGreen600">ciao</Box>;

export const LoggedOut = Template.bind({});
