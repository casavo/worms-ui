import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { textRecipe, TextRecipe } from './Text.css';
import { CommonBaseProps } from '../../utils/common-props';

type TextProps<T extends keyof JSX.IntrinsicElements> = TextRecipe & {
  as?: T;
  className?: string;
  children: React.ReactNode;
  'data-testid'?: string;
  style?: React.CSSProperties;
} & CommonBaseProps;

export const Text = forwardRef<HTMLElement, React.PropsWithChildren<TextProps<any>>>(
  (
    { variant, weight, children, color, 'data-testid': dataTestId, className, as: Tag = 'p', ...props },
    forwardedRef
  ) => {
    return (
      <Tag
        className={clsx(textRecipe({ variant, weight, color }), className)}
        ref={forwardedRef}
        data-testid={dataTestId}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
