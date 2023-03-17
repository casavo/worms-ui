import { style } from '@vanilla-extract/css';
import { colors, spacings } from 'src/tokens';

export const linkStyle = style({
  selectors: {
    '&:not([aria-disabled]):hover, &:not([aria-disabled]):focus': {
      backgroundColor: colors.deepGreen100,
      borderRadius: 4,
      cursor: 'pointer',
    },
    '&[aria-disabled]:focus-visible': {
      borderRadius: spacings.xs,
      boxShadow: `0 0 0 2px ${colors.deepGreen600}`,
    },
    '&[aria-disabled]': {
      color: colors.greyscale400,
      cursor: 'not-allowed',
    },
  },
  color: colors.greyscale900,
  outline: 'none',
  padding: spacings.xs,
  textDecoration: 'underline',
  textUnderlineOffset: spacings.x2s,
});
