import { keyframes, style } from '@vanilla-extract/css';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const contentStyle = style({
  ':empty': {
    display: 'none',
  },
  backgroundColor: vars.colors.white,
  cursor: 'pointer',
  maxWidth: 350,
  minWidth: 150,
  '@media': {
    '(prefers-reduced-motion: no-preference)': {
      animationDuration: '400ms',
      animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
      willChange: 'transform, opacity',
      selectors: {
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="top"]': { animationName: slideDownAndFade },
      },
    },
  },
  border: `1px solid ${vars.colors.greyscale300}`,
  borderRadius: spacings.xs,
  boxShadow: vars.boxShadow.lifted,
  display: 'flex',
  flexDirection: 'column',
});

export const itemStyle = style({
  selectors: {
    '&:first-of-type': {
      borderRadius: `${spacings.xs} ${spacings.xs} 0 0`,
    },
    '&:focus, &:hover, &:active': {
      backgroundColor: vars.colors.deepGreen100,
    },
    '&:last-child': {
      borderRadius: `0 0 ${spacings.xs} ${spacings.xs}`,
    },
    '&[data-disabled]': {
      color: vars.colors.greyscale100,
      cursor: 'not-allowed',
    },
  },
  all: 'unset',
  backgroundColor: vars.colors.white,
  flexGrow: 1,
  padding: spacings.m,
  userSelect: 'none',
});
