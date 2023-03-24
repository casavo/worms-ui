import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css';
import { recipe, RecipeVariants } from '@vanilla-extract/recipes';
import { ValuesAsUnion } from 'src/global';
import { vars } from 'src/theme/theme.css';
import { spacings } from 'src/tokens';

export const toastRecipe = recipe({
  base: {
    padding: spacings.m,
    color: vars.colors.greyscale600,
    borderRadius: spacings.xs,
    width: 250,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: spacings.s,
    position: 'relative',
  },
  defaultVariants: {
    appearance: 'info',
  },
  variants: {
    appearance: {
      error: { background: vars.colors.error100 },
      info: { background: vars.colors.deepGreen100 },
      success: { background: vars.colors.success100 },
      warning: { background: vars.colors.warning100 },
    },
  },
});

export type ToastRecipeVariants = RecipeVariants<typeof toastRecipe>;

export const ToastAppearance = {
  success: 'success',
  warning: 'warning',
  error: 'error',
  info: 'info',
} as const;

export type ToastAppearanceUnion = ValuesAsUnion<typeof ToastAppearance>;

export const iconStyle = styleVariants<Record<ToastAppearanceUnion, ComplexStyleRule>>({
  success: [{ flexShrink: 0 }, { fill: vars.colors.success600 }],
  warning: [{ flexShrink: 0 }, { fill: vars.colors.warning600 }],
  error: [{ flexShrink: 0 }, { fill: vars.colors.error600 }],
  info: [{ flexShrink: 0 }, { fill: vars.colors.deepGreen600 }],
});

export const messageContainerStyle = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const closeIconButtonStyle = style({
  flexShrink: 0,
  top: spacings.xs,
  right: spacings.xs,
  position: 'absolute',
});
