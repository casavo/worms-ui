import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { PressHookProps, useButton, VisuallyHidden } from 'react-aria';
import { useShareForwardedRef } from '../../utils/useShareForwardedRef';
import { Spinner } from '../Spinner';
import { Text } from '../Text';
import { buttonRecipe, ButtonVariants, labelStyle, spinnerStyle } from './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  'data-testid'?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  onClick?: PressHookProps['onPress'];
  title?: string;
  type?: ButtonHTMLAttributes<{}>['type'];
} & ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      'data-testid': dataTestId,
      id,
      variant = 'primary',
      className,
      type = 'button',
      children,
      loading,
      disabled,
      title,
      onClick,
      ...props
    },
    forwardedRef
  ) => {
    const ref = useShareForwardedRef<HTMLButtonElement>(forwardedRef);
    const { buttonProps } = useButton({ ...props, isDisabled: disabled || loading, onPress: onClick }, ref);

    return (
      <button
        {...buttonProps}
        className={clsx(buttonRecipe({ variant }), className)}
        data-testid={dataTestId}
        disabled={loading || disabled}
        id={id}
        ref={ref}
        title={title}
        type={type}
        data-loading={loading}
      >
        {loading ? <Spinner variant={variant} className={spinnerStyle} /> : null}
        <Text variant="bodyM" weight="strong" className={labelStyle}>
          {children}
        </Text>
      </button>
    );
  }
);
