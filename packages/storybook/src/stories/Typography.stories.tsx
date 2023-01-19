import { Typography } from '@casavo/worms-ui';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Typography',
  component: Typography,
  parameters: {},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography variant="bodyL">ciao</Typography>;

export const LoggedOut = Template.bind({});
