import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { vars } from 'src/theme/theme.css';
import { mediaQueries } from 'src/tokens';

export const textRecipe = recipe({
  base: { margin: 0 },
  defaultVariants: {
    variant: 'bodyM',
  },
  variants: {
    variant: {
      display: {
        fontFamily: vars.fonts.serif,
        size: vars.mobileFontSizes.display,
        lineHeight: '120%',
        fontWeight: vars.fontWeight.light,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.display } },
      },
      h1: {
        fontFamily: vars.fonts.serif,
        size: vars.mobileFontSizes.h1,
        lineHeight: '120%',
        fontWeight: vars.fontWeight.light,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.h1 } },
      },
      h2: {
        fontFamily: vars.fonts.serif,
        fontSize: vars.mobileFontSizes.h2,
        lineHeight: '120%',
        fontWeight: vars.fontWeight.light,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.h2 } },
      },
      h3: {
        fontFamily: vars.fonts.sans,
        fontSize: vars.mobileFontSizes.h3,
        lineHeight: '120%',
        fontWeight: vars.fontWeight.strong,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.h3 } },
      },
      h4: {
        fontFamily: vars.fonts.sans,
        fontSize: vars.mobileFontSizes.h4,
        lineHeight: '120%',
        fontWeight: vars.fontWeight.strong,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.h4 } },
      },
      description: {
        fontFamily: vars.fonts.sans,
        fontSize: vars.mobileFontSizes.description,
        lineHeight: '150%',
        fontWeight: vars.fontWeight.regular,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.description } },
      },
      bodyM: {
        fontFamily: vars.fonts.sans,
        fontSize: vars.mobileFontSizes.bodyM,
        lineHeight: '150%',
        fontWeight: vars.fontWeight.regular,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.bodyM } },
      },
      bodyL: {
        fontFamily: vars.fonts.sans,
        fontSize: vars.mobileFontSizes.bodyL,
        lineHeight: '150%',
        fontWeight: vars.fontWeight.regular,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.bodyL } },
      },
      caption: {
        fontFamily: vars.fonts.sans,
        fontSize: vars.mobileFontSizes.caption,
        lineHeight: '150%',
        fontWeight: vars.fontWeight.regular,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.caption } },
      },
      small: {
        fontFamily: vars.fonts.sans,
        fontSize: vars.mobileFontSizes.small,
        lineHeight: '150%',
        fontWeight: vars.fontWeight.regular,
        '@media': { [mediaQueries.tablet]: { fontSize: vars.desktopFontSizes.small } },
      },
    },
    color: {
      neutral: { color: vars.textColor.neutral },
      inverted: { color: vars.textColor.inverted },
      description: { color: vars.textColor.description },
      title: { color: vars.textColor.title },
      inactive: { color: vars.textColor.inactive },
    },
    weight: {
      light: { fontWeight: vars.fontWeight.light },
      regular: { fontWeight: vars.fontWeight.regular },
      strong: { fontWeight: vars.fontWeight.strong },
    },
  },
});

export type TextRecipe = RecipeVariants<typeof textRecipe>;
