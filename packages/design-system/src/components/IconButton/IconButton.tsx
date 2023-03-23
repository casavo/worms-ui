import clsx from 'clsx';
import { cloneElement, forwardRef } from 'react';
import { PressHookProps, useButton, VisuallyHidden } from 'react-aria';
import { useShareForwardedRef } from '../../utils/useShareForwardedRef';
import { iconButtonRecipe, IconButtonVariants, iconStyle } from './IconButton.css';

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
    { disabled = false, children, onClick, title, 'data-testid': dataTestId, visuallyHiddenLabel, className, size },
    forwardedRef
  ) => {
    const ref = useShareForwardedRef<HTMLButtonElement>(forwardedRef);
    const { buttonProps } = useButton(
      { isDisabled: disabled, onPress: onClick, 'aria-label': title ?? visuallyHiddenLabel },
      ref
    );

    const icon = cloneElement(children as React.ReactElement, { className: iconStyle });

    return (
      <button
        {...buttonProps}
        data-testid={dataTestId}
        title={title ?? visuallyHiddenLabel}
        className={clsx(iconButtonRecipe({ size }), className)}
      >
        {icon}
        {visuallyHiddenLabel && <VisuallyHidden>{visuallyHiddenLabel}</VisuallyHidden>}
      </button>
    );
  }
);
