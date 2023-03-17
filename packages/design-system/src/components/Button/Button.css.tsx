import { styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

export const buttonStatusVariants = styleVariants({
  primary: {
    selectors: {
      '&:not([disabled]):hover': {
        boxShadow: vars.boxShadow.lifted,
        transform: 'translateY(-1px)',
        backgroundColor: vars.colors.greyscale400,
        borderColor: vars.colors.greyscale400,
      },
      '&:not([disabled]):active': {
        backgroundColor: vars.colors.greyscale500,
        borderColor: vars.colors.greyscale500,
      },
      '&:not([disabled]):focus': {
        boxShadow: `0 0 0 2px ${vars.colors.green600}`,
        outline: 'none',
      },
    },
  },
  secondary: {
    selectors: {
      '&:not([disabled]):hover': {
        boxShadow: vars.boxShadow.lifted,
        transform: 'translateY(-1px)',
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
        outline: 'none',
      },
    },
  },
});

export const buttonRecipe = recipe({
  base: {
    fontFamily: vars.fonts.sans,
    padding: `${spacings.s} ${spacings.m}`,
  },

  defaultVariants: { variant: 'primary' },
  variants: {
    variant: {
      primary: [
        {
          backgroundColor: vars.colors.greyscale600,
          border: `1px solid ${vars.colors.greyscale600}`,
          borderRadius: spacings.xs,
          color: vars.colors.white,
          selectors: {
            '&[disabled]': {
              backgroundColor: vars.colors.greyscale100,
              border: `1px solid ${vars.colors.greyscale100}`,
              color: vars.colors.greyscale400,
            },
          },
        },
      ],
      secondary: [
        {
          border: `1px solid ${vars.colors.greyscale600}`,
          backgroundColor: vars.colors.white,
          borderRadius: spacings.xs,
          color: vars.colors.greyscale600,
          selectors: {
            '&[disabled]': {
              backgroundColor: 'transparent',
              border: `1px solid ${vars.colors.greyscale400}`,
              color: vars.colors.greyscale400,
            },
          },
        },
      ],
    },
  },
});

export type ButtonVariants = RecipeVariants<typeof buttonRecipe>;
