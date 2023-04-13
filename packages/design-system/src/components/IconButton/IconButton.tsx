import clsx from 'clsx';
import { forwardRef } from 'react';
import { PressHookProps, useButton, VisuallyHidden } from 'react-aria';
import { useShareForwardedRef } from '../../utils/useShareForwardedRef';
import { iconButtonRecipe, IconButtonVariants } from './IconButton.css';

type IconButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: PressHookProps['onPress'];
  'data-testid'?: string;
  title?: string;
  visuallyHiddenLabel?: string;
} & IconButtonVariants;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { disabled, children, onClick, title, 'data-testid': dataTestId, visuallyHiddenLabel, className, size, ...props },
    forwardedRef
  ) => {
    const hiddenLabel = visuallyHiddenLabel ?? title;
    const ref = useShareForwardedRef<HTMLButtonElement>(forwardedRef);
    const { buttonProps } = useButton(
      { ...props, isDisabled: disabled, onPress: onClick, 'aria-label': hiddenLabel },
      ref
    );

    return (
      <button
        {...buttonProps}
        data-testid={dataTestId}
        title={title ?? visuallyHiddenLabel}
        ref={ref}
        className={clsx(iconButtonRecipe({ size }), className)}
      >
        {children}
        {hiddenLabel && <VisuallyHidden>{hiddenLabel}</VisuallyHidden>}
      </button>
    );
  }
);
