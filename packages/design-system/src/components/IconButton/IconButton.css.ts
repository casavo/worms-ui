import { style } from '@vanilla-extract/css';
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
    },
    '&:disabled': {
      cursor: 'not-allowed',
    },
    '&:not([disabled]):hover': {
      background: vars.colors.deepGreen100,
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

export const iconStyle = style({
  selectors: {
    [`${iconButtonStyleBase}:disabled &`]: { fill: vars.textColor.inactive },
  },
});
