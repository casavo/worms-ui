import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { useButton } from 'react-aria';
import { useShareForwardedRef } from '../../utils/useShareForwardedRef';
import { Spinner } from '../Spinner';
import { Text } from '../Text';
import { buttonRecipe, ButtonVariants, iconStyle, labelStyle } from './Button.css';

type BaseIconProps = { className?: string };

type ButtonProps = {
  children: React.ReactNode;
  'data-testid'?: string;
  className?: string;
  disabled?: boolean;
  icon?: (props: BaseIconProps) => JSX.Element;
  iconPosition?: 'left' | 'right';
  id?: string;
  loading?: boolean;
  onClick?: ButtonHTMLAttributes<{}>['onClick'];
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
      icon: Icon,
      iconPosition = 'left',
      ...props
    },
    forwardedRef
  ) => {
    const ref = useShareForwardedRef<HTMLButtonElement>(forwardedRef);
    const { buttonProps } = useButton({ ...props, isDisabled: disabled || loading }, ref);
    const { onClick } = buttonProps;

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
        onClick={(e) => {
          e.stopPropagation();
          if (!loading && !disabled) {
            onClick && onClick(e);
          }
        }}
      >
        {loading ? (
          <Spinner variant={variant} />
        ) : (
          <Text variant="bodyM" weight="strong" className={labelStyle}>
            {iconPosition === 'left' && Icon ? <Icon className={iconStyle[variant]} /> : null}
            {children}
            {iconPosition === 'right' && Icon ? <Icon className={iconStyle[variant]} /> : null}
          </Text>
        )}
      </button>
    );
  }
);
