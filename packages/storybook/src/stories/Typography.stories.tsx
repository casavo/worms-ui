import { Box, colors, Typography, TypographyVariants } from '@casavo/worms-ui';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    color: {
      options: Object.keys(colors),
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

const variants: TypographyVariants[] = ['h2', 'h3', 'bodyL', 'bodyM', 'caption', 'description'];

const Template: ComponentStory<typeof Typography> = (args) => (
  <>
    {variants.map((t) => {
      return (
        <>
          <Typography variant="description">{`${t}:`}</Typography>
          <Typography variant={t} color={args.color} weight={args.weight}>
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
  color: 'greyscale600',
  weight: '400',
};
