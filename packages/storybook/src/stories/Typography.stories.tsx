import { Box, Typography, TypographyColors, TypographyVariants } from '@casavo/worms-ui';
import { ComponentMeta, ComponentStory } from '@storybook/react';

const variants: TypographyVariants[] = ['h2', 'h3', 'bodyL', 'bodyM', 'caption', 'description'];
const colors: TypographyColors[] = ['description', 'inactive', 'inverted', 'neutral', 'title'];

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    color: {
      options: colors,
      control: { type: 'select' },
    },
    children: {
      control: 'text',
    },
    weight: {
      options: ['300', '400', '600'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    {variants.map((t) => {
      return (
        <>
          <Typography variant="description">{`${t}:`}</Typography>
          <Typography variant={t} weight={args.weight} color={args.color}>
            {args.children}
          </Typography>
          <Box height="m" />
        </>
      );
    })}
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Hello!',
  color: 'neutral',
  weight: '400',
};
