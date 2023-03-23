import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

export const olStyle = style({
  display: 'inline-flex',
  flexWrap: 'wrap',
  gap: spacings.xs,
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const breadcrumbItemStyle = style({
  selectors: {
    '&:not(:last-of-type):after': { color: vars.textColor.inactive, content: '"/"', marginLeft: spacings.xs },
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
    '&[aria-current]': {
      cursor: 'auto',
      color: vars.textColor.description,
    },
  },
});
