import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

export const olStyle = style({
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: spacings.s,
});

export const linkRecipe = recipe({
  base: {
    color: vars.textColor.inactive,
    cursor: 'pointer',
    selectors: {
      '&:not(:last-of-type):after': { color: vars.textColor.inactive, content: '"/"', marginLeft: spacings.s },
    },
  },
  variants: {
    isCurrent: {
      true: { color: vars.textColor.description, cursor: 'default' },
    },
  },
});
