import { ComplexStyleRule, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { ValuesAsUnion } from 'src/global';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

export const badgeRecipe = recipe({
  base: {
    border: '1px solid',
    borderRadius: spacings.xs,
    display: 'inline-block',
    padding: `calc(${spacings.xs} / 2) ${spacings.s}`,
    textTransform: 'uppercase',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    background: vars.colors.greyscale0,
  },
  defaultVariants: {
    variant: 'success',
    inverted: false,
  },
  variants: {
    variant: {
      success: { borderColor: vars.colors.success400 },
      warning: { borderColor: vars.colors.warning400 },
      error: { borderColor: vars.colors.error400 },
      orangeB2C: { borderColor: vars.colors.orange400 },
      greenB2B: { borderColor: vars.colors.green400 },
      deepGreen: { borderColor: vars.colors.deepGreen400 },
      light: { borderColor: vars.colors.greyscale300 },
    },
    inverted: { true: {} },
  },
  compoundVariants: [
    { variants: { variant: 'success', inverted: true }, style: { background: vars.colors.success100 } },
    { variants: { variant: 'warning', inverted: true }, style: { background: vars.colors.warning100 } },
    { variants: { variant: 'error', inverted: true }, style: { background: vars.colors.error100 } },
    { variants: { variant: 'orangeB2C', inverted: true }, style: { background: vars.colors.orange100 } },
    { variants: { variant: 'greenB2B', inverted: true }, style: { background: vars.colors.green100 } },
    { variants: { variant: 'deepGreen', inverted: true }, style: { background: vars.colors.deepGreen100 } },
    { variants: { variant: 'light', inverted: true }, style: { background: vars.colors.offWhite } },
  ],
});

export type BadgeVariants = RecipeVariants<typeof badgeRecipe>;

export const BadgeVariant = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  orangeB2C: 'orangeB2C',
  greenB2B: 'greenB2B',
  deepGreen: 'deepGreen',
  light: 'light',
} as const;

export type BadgeVariantUnion = ValuesAsUnion<typeof BadgeVariant>;

export const iconStyle = styleVariants<Record<BadgeVariantUnion, ComplexStyleRule>>({
  success: { fill: vars.colors.success600 },
  warning: { fill: vars.colors.warning600 },
  error: { fill: vars.colors.error600 },
  orangeB2C: { fill: vars.colors.orange600 },
  greenB2B: { fill: vars.colors.green600 },
  deepGreen: { fill: vars.colors.deepGreen600 },
  light: { fill: vars.colors.greyscale600 },
});
