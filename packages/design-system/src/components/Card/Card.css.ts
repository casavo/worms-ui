import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';

export const clickableCardStyle = style({
  ':hover': {
    boxShadow: vars.boxShadow.sm,
  },
});

export const cardRecipe = recipe({
  base: {
    borderRadius: 4,
  },
  variants: {
    type: {
      highlight: {
        backgroundColor: vars.backgroundColor.highlight,
      },
      neutral: {
        backgroundColor: vars.backgroundColor.neutral,
      },
    },
  },

  defaultVariants: {
    type: 'neutral',
  },
});

export type CardVariants = RecipeVariants<typeof cardRecipe>;
