import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

export const olStyle = style({
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: spacings.xs,
});

export const breadcrumbItemRecipe = recipe({
  base: {
    color: vars.textColor.inactive,
    selectors: {
      '&:not(:last-of-type):after': { color: vars.textColor.inactive, content: '"/"', marginLeft: spacings.xs },
    },
  },
  variants: {
    isCurrent: {
      true: { color: vars.textColor.description, cursor: 'default', padding: `0 ${spacings.xs}` },
    },
  },
});

export const breadcrumbItemLinkStyle = style({
  textDecoration: 'none',
  color: vars.textColor.inactive,
  transition: 'color 250ms',
  selectors: {
    '&:not([aria-disabled]):hover, &:not([aria-disabled]):focus': {
      color: vars.textColor.description,
    },
  },
});
