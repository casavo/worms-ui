import clsx from 'clsx';
import { forwardRef } from 'react';
import { usePress } from 'react-aria';
import { Spinner } from '../Spinner';
import { buttonRecipe, buttonStatusVariants, ButtonVariants } from './Button.css';

type ButtonProps = Omit<React.HTMLProps<HTMLButtonElement>, 'type'> & {
  'data-testid'?: string;
  id?: string;
  onClick?: () => void;
  className?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  loading?: boolean;
} & ButtonVariants;

export const Button = forwardRef<HTMLButtonElement, React.PropsWithChildren<ButtonProps>>(
  ({
    'data-testid': dataTestId,
    id,
    onClick,
    variant = 'primary',
    type = 'button',
    className,
    children,
    loading,
    ...props
  }) => {
    let { pressProps } = usePress({
      onPress: onClick,
    });

    const buttonProps = { ...pressProps, ...props };
    return (
      <button
        data-testid={dataTestId}
        id={id}
        className={clsx(buttonRecipe({ variant: variant }), buttonStatusVariants[variant], className)}
        disabled={loading || props.disabled}
        type={type}
        onClick={(e) => {
          e.stopPropagation();
          if (!loading && !props.disabled) {
            onClick && onClick(e);
          }
        }}
        {...buttonProps}
      >
        {loading ? <Spinner variant={variant} /> : children}
      </button>
    );
  }
);
