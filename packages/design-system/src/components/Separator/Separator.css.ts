import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';

export const separatorRecipe = recipe({
  base: {
    display: 'block',
    background: vars.colors.greyscale300,
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
  variants: {
    orientation: {
      horizontal: {
        height: 1,
        width: '100%',
      },
      vertical: {
        width: 1,
        height: 'auto',
        alignSelf: 'stretch',
      },
    },
  },
});

export type SeparatorVariants = RecipeVariants<typeof separatorRecipe>;
