import { createTheme } from '@vanilla-extract/css';
import { colors, fontFamily, fontSizes, fontWeight, mediaQueries } from 'src/tokens';

export const [themeClass, vars] = createTheme({
  backgroundColor: {
    app: colors.offWhite,
    neutral: colors.white,
    highlight: colors.deepGreen600,
  },
  textColor: {
    neutral: colors.greyscale600,
    inverted: colors.white,
    description: colors.greyscale600,
    title: colors.deepGreen600,
    inactive: colors.greyscale400,
  },
  fonts: {
    sans: fontFamily.sans,
    serif: fontFamily.serif,
  },
  boxShadow: {
    sm: '0px 6px 20px rgba(54, 67, 82, 0.25)',
    md: '',
    lg: '',
  },
  fontWeight,
  mediaQueries,
  mobileFontSizes: {
    display: fontSizes.mobile.display,
    h1: fontSizes.mobile.h1,
    h2: fontSizes.mobile.h2,
    h3: fontSizes.mobile.h3,
    h4: fontSizes.mobile.h4,
    bodyL: fontSizes.mobile.bodyL,
    bodyM: fontSizes.mobile.bodyM,
    description: fontSizes.mobile.description,
    caption: fontSizes.mobile.caption,
    small: fontSizes.mobile.small,
  },
  desktopFontSizes: {
    display: fontSizes.desktop.display,
    h1: fontSizes.desktop.h1,
    h2: fontSizes.desktop.h2,
    h3: fontSizes.desktop.h3,
    h4: fontSizes.desktop.h4,
    bodyL: fontSizes.desktop.bodyL,
    bodyM: fontSizes.desktop.bodyM,
    description: fontSizes.desktop.description,
    caption: fontSizes.desktop.caption,
    small: fontSizes.desktop.small,
  },
});
