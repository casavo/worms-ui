import { keyframes } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinnerRecipe = recipe({
  base: {
    animation: `${rotate} 0.6s ease-out infinite`,
    background: 'transparent',
    borderBottom: '4px solid transparent',
    borderLeft: '4px solid transparent',
    borderRadius: '100%',
    borderRight: '4px solid transparent',
    borderTop: '4px solid white',
    boxSizing: 'border-box',
    display: 'block',
    height: '16px',
    left: 'calc(50% - 8px)',
    lineHeight: '46px',
    width: '16px',
  },
  defaultVariants: {
    variant: 'primary',
  },
  variants: {
    variant: {
      primary: {
        color: vars.colors.white,
      },
      secondary: {
        borderTopColor: vars.colors.greyscale400,
      },
    },
  },
});

export type SpinnerVariants = RecipeVariants<typeof spinnerRecipe>;
