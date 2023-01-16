import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from 'src/theme/theme.css';
import { mediaQueries } from 'src/tokens';

const base = style({ color: vars.textColor.neutral, whiteSpace: 'pre-wrap', margin: 0, width: 'fit-content' });
const primaryFontStyle = style({ fontFamily: vars.textFont.primary });
const secondaryFontStyle = style({ fontFamily: vars.textFont.secondary });

export const typographyStyles = styleVariants({
  h2: [
    base,
    secondaryFontStyle,
    {
      fontSize: 32,
      fontWeight: 300,
      lineHeight: '120%',
      '@media': {
        [mediaQueries.tablet]: {
          fontSize: 28,
        },
      },
    },
  ],
  h3: [
    base,
    primaryFontStyle,
    {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: '120%',
      '@media': {
        [mediaQueries.tablet]: {
          fontSize: 24,
        },
      },
    },
  ],
  description: [
    base,
    primaryFontStyle,
    {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '150%',
    },
  ],
  bodyM: [
    base,
    primaryFontStyle,
    {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '150%',
    },
  ],
  bodyL: [
    base,
    primaryFontStyle,
    {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: '150%',
      '@media': {
        [mediaQueries.tablet]: {
          fontSize: 18,
        },
      },
    },
  ],
  caption: [
    base,
    primaryFontStyle,
    {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '150%',
    },
  ],
});
