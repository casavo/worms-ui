import { style } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { ValuesAsUnion } from 'src/global';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

export const legendStyle = style({
  color: vars.colors.greyscale400,
  fontSize: vars.desktopFontSizes.caption,
  marginBottom: spacings.s,
});

export const radioGroupRecipe = recipe({
  base: {
    all: 'unset',
    backgroundColor: 'white',
    border: `1px solid ${vars.colors.green400}`,
    borderRadius: spacings.x2l,
    cursor: 'pointer',
    fontSize: vars.desktopFontSizes.caption,
    padding: `0 ${spacings.sm}`,
    textAlign: 'center',
    transition: 'box-shadow 0.2s ease-in-out',
    width: '100%',
    outline: 'none',
    selectors: {
      '&::after': {
        color: 'transparent',
        content: 'attr(title)',
        display: 'block',
        fontWeight: 'bold',
        height: '1px',
        overflow: 'hidden',
        visibility: 'hidden',
      },
      '&[aria-checked="true"]': {
        color: vars.colors.greyscale900,
        fontWeight: 700,
        outline: 'none',
      },
      '&:focus-visible': {
        outline: 'none',
      },
      '&:focus-visible:not([aria-checked="true"]), &:hover:not([aria-checked="true"])': {
        outline: 'none',
      },
    },
  },
  defaultVariants: { variant: 'greenB2B', size: 'medium' },
  variants: {
    size: {
      small: {
        height: spacings.xl,
      },
      medium: {
        height: `calc(${spacings.ml} * 2)`,
      },
    },
    variant: {
      orangeB2C: {
        borderColor: vars.colors.orange400,
        selectors: {
          '&[aria-checked="true"]': {
            boxShadow: `0 0 0 1px ${vars.colors.orange600}`,
            backgroundColor: vars.colors.orange100,
            borderColor: vars.colors.orange600,
          },
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${vars.colors.orange400}`,
          },
          '&:focus-visible:not([aria-checked="true"]), &:hover:not([aria-checked="true"])': {
            backgroundColor: vars.colors.orange100,
          },
        },
      },
      greenB2B: {
        borderColor: vars.colors.green400,
        selectors: {
          '&[aria-checked="true"]': {
            backgroundColor: vars.colors.green100,
            borderColor: vars.colors.green600,
            boxShadow: `0 0 0 1px ${vars.colors.green600}`,
          },
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${vars.colors.green400}`,
          },
          '&:focus-visible:not([aria-checked="true"]), &:hover:not([aria-checked="true"])': {
            backgroundColor: vars.colors.green100,
          },
        },
      },
      deepGreen: {
        borderColor: vars.colors.deepGreen400,
        selectors: {
          '&[aria-checked="true"]': {
            backgroundColor: vars.colors.deepGreen100,
            borderColor: vars.colors.deepGreen600,
            boxShadow: `0 0 0 1px ${vars.colors.deepGreen600}`,
          },
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${vars.colors.deepGreen400}`,
          },
          '&:focus-visible:not([aria-checked="true"]), &:hover:not([aria-checked="true"])': {
            backgroundColor: vars.colors.deepGreen100,
          },
        },
      },
      light: {
        borderColor: vars.colors.greyscale400,
        selectors: {
          '&[aria-checked="true"]': {
            backgroundColor: vars.colors.greyscale100,
            borderColor: vars.colors.greyscale600,
            boxShadow: `0 0 0 1px ${vars.colors.greyscale600}`,
          },
          '&:focus-visible': {
            boxShadow: `0 0 0 2px ${vars.colors.greyscale400}`,
          },
          '&:focus-visible:not([aria-checked="true"]), &:hover:not([aria-checked="true"])': {
            backgroundColor: vars.colors.greyscale50,
          },
        },
      },
    },
  },
});

export type RadioGroupRecipeVariant = RecipeVariants<typeof radioGroupRecipe>;

export const RadioGroupVariant = {
  orangeB2C: 'orangeB2C',
  greenB2B: 'greenB2B',
  deepGreen: 'deepGreen',
  light: 'light',
} as const;

export type RadioGroupVariantUnion = ValuesAsUnion<typeof RadioGroupVariant>;
