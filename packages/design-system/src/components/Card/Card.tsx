import clsx from 'clsx';
import { forwardRef } from 'react';
import { usePress } from 'react-aria';
import { Text } from '../Text';
import { cardContainerStyle, cardRecipe, cardTitle, CardVariants } from './Card.css';

type CardProps = {
  'data-testid'?: string;
  id?: string;
  onClick?: () => void;
  title?: string;
  className?: string;
} & CardVariants;

export const Card = forwardRef<HTMLDivElement, React.PropsWithChildren<CardProps>>(
  ({ 'data-testid': dataTestId, children, id, onClick, title, variant = 'default', className }, forwardedRef) => {
    let { pressProps } = usePress({
      onPress: onClick,
    });

    const buttonProps = onClick ? { ...pressProps, role: 'button', tabIndex: 0 } : {};

    return (
      <div className={clsx(cardContainerStyle)}>
        <div
          className={clsx(cardRecipe({ variant }), className)}
          data-testid={dataTestId}
          id={id}
          onClick={onClick}
          ref={forwardedRef}
          {...buttonProps}
        >
          {title ? (
            <Text variant="bodyL" weight="strong" className={clsx(cardTitle[variant])}>
              {title}
            </Text>
          ) : null}
          {children}
        </div>
      </div>
    );
  }
);
