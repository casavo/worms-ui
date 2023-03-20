import { keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerRecipe = recipe({
  base: {
    animation: `${rotate} 0.65s linear infinite`,
    borderBottom: `${spacings.x2s} solid`,
    borderLeft: `${spacings.x2s} solid`,
    borderRadius: '100%',
    borderRight: `${spacings.x2s} solid`,
    borderTop: `${spacings.x2s} solid`,
    boxSizing: 'border-box',
    display: 'block',
    height: spacings.ml,
    left: 'calc(50% - 8px)',
    lineHeight: '46px',
    width: spacings.ml,
  },
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: {
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: vars.colors.white,
        borderTopColor: vars.colors.white,
      },
      secondary: {
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: vars.colors.greyscale400,
        borderTopColor: vars.colors.greyscale400,
      },
    },
  },
});

export type SpinnerVariants = RecipeVariants<typeof spinnerRecipe>;
