import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { textRecipe, TextRecipe } from './Text.css';

type TextProps<T extends keyof JSX.IntrinsicElements> = TextRecipe & {
  as?: T;
  className?: string;
  children: React.ReactNode;
  dataTestId?: string;
};

export const Text = forwardRef<HTMLElement, React.PropsWithChildren<TextProps<any>>>(
  ({ variant, weight, children, color, dataTestId, className, as: Tag = 'p' }, forwardedRef) => {
    return (
      <Tag
        className={clsx(textRecipe({ variant, weight, color }), className)}
        ref={forwardedRef}
        data-testid={dataTestId}
      >
        {children}
      </Tag>
    );
  }
);
