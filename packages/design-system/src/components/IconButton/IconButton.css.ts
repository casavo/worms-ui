import { style, globalStyle } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';

const iconButtonStyleBase = style({
  borderRadius: 999,
  outline: 'none',
  cursor: 'pointer',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 250ms',
  selectors: {
    '&:not([disabled]):focus, &:not([disabled]):focus-visible': {
      background: vars.colors.deepGreen100,
      boxShadow: `0 0 0 2px ${vars.colors.green600}`,
      outline: 'none',
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&:not([disabled]):hover': {
      background: vars.colors.deepGreen100,
      outline: 'none',
    },
  },
});

export const iconButtonRecipe = recipe({
  base: iconButtonStyleBase,
  defaultVariants: {
    size: 'small',
  },
  variants: {
    size: {
      small: {
        height: 40,
        width: 40,
      },
      medium: {
        height: 48,
        width: 48,
      },
    },
  },
});

export type IconButtonVariants = RecipeVariants<typeof iconButtonRecipe>;

globalStyle(`${iconButtonStyleBase}:disabled > svg`, {
  fill: vars.textColor.inactive,
});
