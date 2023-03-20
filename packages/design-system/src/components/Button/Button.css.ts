import { style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

const primaryButtonStatusStyle = style({
  selectors: {
    '&:not([disabled]):hover': {
      backgroundColor: vars.colors.greyscale400,
      borderColor: vars.colors.greyscale400,
    },
    '&:not([disabled]):active': {
      backgroundColor: vars.colors.greyscale500,
      borderColor: vars.colors.greyscale500,
    },
    '&:not([disabled]):focus': {
      boxShadow: `0 0 0 2px ${vars.colors.green600}`,
      backgroundColor: vars.colors.greyscale400,
      borderColor: vars.colors.greyscale400,
    },
  },
});
const secondaryButtonStatusStyle = style({
  selectors: {
    '&:not([disabled]):hover': {
      backgroundColor: vars.colors.greyscale600,
      borderColor: vars.colors.greyscale600,
      color: vars.colors.white,
    },
    '&:not([disabled]):active': {
      backgroundColor: vars.colors.greyscale500,
      borderColor: vars.colors.greyscale500,
    },
    '&:not([disabled]):focus': {
      boxShadow: `0 0 0 2px ${vars.colors.green600}`,
      backgroundColor: vars.colors.greyscale600,
      borderColor: vars.colors.greyscale600,
      color: vars.colors.white,
    },
  },
});

export const buttonRecipe = recipe({
  base: {
    border: '1px solid',
    borderRadius: spacings.xs,
    cursor: 'pointer',
    fontFamily: vars.fonts.sans,
    height: `calc(${spacings.ml} * 2)`,
    outline: 'none',
    padding: `${spacings.xs} ${spacings.m}`,
    transition: 'all 250ms',
    maxWidth: '100%',
    selectors: {
      '&[disabled]': {
        cursor: 'not-allowed',
        color: vars.colors.greyscale400,
      },
    },
  },
  defaultVariants: { variant: 'primary' },
  variants: {
    variant: {
      primary: [
        primaryButtonStatusStyle,
        {
          backgroundColor: vars.colors.greyscale600,
          borderColor: vars.colors.greyscale600,
          color: vars.colors.white,
          selectors: {
            '&[disabled]': {
              backgroundColor: vars.colors.greyscale100,
              borderColor: vars.colors.greyscale100,
            },
          },
        },
      ],
      secondary: [
        secondaryButtonStatusStyle,
        {
          backgroundColor: 'transparent',
          borderColor: vars.colors.greyscale600,
          color: vars.colors.greyscale600,
          selectors: {
            '&[disabled]': {
              borderColor: vars.colors.greyscale400,
            },
          },
        },
      ],
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

export const labelStyle = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacings.s,
});

export const iconStyle = styleVariants({
  primary: {
    fill: vars.colors.white,
    selectors: {
      [`${primaryButtonStatusStyle}[disabled] &`]: {
        fill: vars.colors.greyscale400,
      },
    },
  },
  secondary: {
    fill: vars.colors.greyscale600,
    transition: 'fill 250ms',
    selectors: {
      [`${secondaryButtonStatusStyle}[disabled] &`]: {
        fill: vars.colors.greyscale400,
      },
      [`${secondaryButtonStatusStyle}:not([disabled]):hover &`]: {
        fill: vars.colors.white,
      },
      [`${secondaryButtonStatusStyle}:not([disabled]):focus &`]: {
        fill: vars.colors.white,
      },
    },
  },
});
