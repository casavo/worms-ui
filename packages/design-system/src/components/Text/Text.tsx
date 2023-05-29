import { clsx } from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';
import { textRecipe, TextRecipe } from './Text.css';
import { CommonBaseProps } from '../../utils/common-props';

// from from https://github.com/kripod/react-polymorphic-box
type AsProp<T extends React.ElementType = React.ElementType> = {
  as?: T;
};

type TextProps<T extends React.ElementType = React.ElementType> = Omit<React.ComponentProps<T>, keyof AsProp> &
  CommonBaseProps &
  TextRecipe & {
    children: React.ReactNode;
  };

export const Text: <T extends React.ElementType = React.ElementType>(props: TextProps<T>) => React.ReactElement | null =
  forwardRef(function Text(
    { variant, weight, children, color, 'data-testid': dataTestId, className, as: Tag = 'p', ...props }: TextProps,
    ref: React.Ref<Element>
  ) {
    return (
      <Tag
        className={clsx(textRecipe({ variant, weight, color }), className)}
        data-testid={dataTestId}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  });
