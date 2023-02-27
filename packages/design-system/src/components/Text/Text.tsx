import { clsx } from 'clsx';
import { createElement, forwardRef } from 'react';
import { textRecipe, TextRecipe } from './Text.css';

export type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  dataTestId?: string;
} & TextRecipe;

export const Text = forwardRef<HTMLElement, React.PropsWithChildren<TextProps>>(
  ({ variant, weight, children, color, dataTestId, className, as = 'p' }, forwardedRef) => {
    return createElement(as, {
      children,
      className: clsx(textRecipe({ variant, weight, color }), className),
      ref: forwardedRef,
      'data-testid': dataTestId,
    });
  }
);
