import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from 'src/theme/theme.css';

export const triggerIconButtonStyle = style({
  selectors: {
    '&[data-state=open]': {
      background: vars.colors.deepGreen100,
    },
  },
});

export const chevronIconStyle = style({
  transition: 'transform 0.3s',
  selectors: {
    '&[data-state=open]': {
      transform: 'rotate(180deg)',
    },
  },
});

export const triggerMenuStyle = style({
  background: 'transparent',
  border: 'none',
  selectors: {
    '&[data-state=open]': {
      background: vars.colors.deepGreen100,
      color: vars.textColor.neutral,
    },
    '&:not([disabled]):hover, &:not([disabled]):focus, &:not([disabled]):focus-visible': {
      background: vars.colors.deepGreen100,
      color: vars.textColor.neutral,
    },
  },
});

globalStyle(`${triggerMenuStyle}:not([disabled]):hover svg`, {
  fill: vars.textColor.neutral,
});

globalStyle(`${triggerMenuStyle}:not([disabled]):focus svg`, {
  fill: vars.textColor.neutral,
});

globalStyle(`${triggerMenuStyle}:not([disabled]):focus-visible svg`, {
  fill: vars.textColor.neutral,
});
