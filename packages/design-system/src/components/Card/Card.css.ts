import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

const clickableCardStyle = style({
  selectors: {
    '&[role=button]': {
      cursor: 'pointer',
      outline: 'none',
    },
    '&[role=button]:hover, &[role=button]:focus': {
      boxShadow: vars.boxShadow.lifted,
      transform: 'translateY(-1px)',
    },
  },
});

export const cardRecipe = recipe({
  base: {
    borderRadius: spacings.s,
    padding: spacings.l,
    transition: 'all 300ms, border 200ms',
    backgroundColor: vars.backgroundColor.neutral,
  },
  defaultVariants: {
    variant: 'default',
    selected: false,
  },
  variants: {
    variant: {
      default: {
        border: `1px solid ${vars.colors.deepGreen100}`,
      },
      highlight: {
        backgroundColor: vars.backgroundColor.highlight,
        color: vars.colors.white,
        border: `1px solid ${vars.backgroundColor.highlight}`,
      },
      defaultOnWhite: {
        border: `1px solid ${vars.colors.deepGreen400}`,
      },
    },
    selected: { true: {} },
  },
  compoundVariants: [
    {
      variants: { variant: 'default' },
      style: clickableCardStyle,
    },
    {
      variants: { variant: 'defaultOnWhite' },
      style: clickableCardStyle,
    },
    {
      variants: { variant: 'default', selected: true },
      style: { border: `1px solid ${vars.colors.green600}` },
    },
    {
      variants: { variant: 'defaultOnWhite', selected: true },
      style: { border: `1px solid ${vars.colors.green600}` },
    },
  ],
});

export type CardVariants = RecipeVariants<typeof cardRecipe>;

export const cardTitleStyle = style({
  marginBottom: spacings.l,
});

export const cardTitle = styleVariants({
  default: {
    color: vars.textColor.title,
  },
  defaultOnWhite: {
    color: vars.textColor.title,
  },
  highlight: {
    color: vars.textColor.inverted,
  },
});

export const cardSubtitle = styleVariants({
  default: {
    color: vars.textColor.neutral,
  },
  defaultOnWhite: {
    color: vars.textColor.neutral,
  },
  highlight: {
    color: vars.textColor.inverted,
  },
});
