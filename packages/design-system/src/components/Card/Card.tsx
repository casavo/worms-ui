import clsx from 'clsx';
import { usePress } from 'react-aria';
import { Text } from '../Text';
import { cardRecipe, cardSubtitle, cardTitle, cardTitleStyle, CardVariants } from './Card.css';

type CardProps = {
  'data-testid'?: string;
  id?: string;
  onClick?: () => void;
  selected?: boolean;
  subtitle?: string;
  title?: string;
  className?: string;
} & CardVariants;

export const Card: React.FC<React.PropsWithChildren<CardProps>> = ({
  'data-testid': dataTestId,
  children,
  id,
  onClick,
  selected,
  title,
  subtitle,
  variant = 'default',
  className,
}) => {
  let { pressProps } = usePress({
    onPress: onClick,
  });

  const buttonProps = onClick ? { ...pressProps, role: 'button', tabIndex: 0 } : {};

  return (
    <div
      className={clsx(cardRecipe({ variant, selected }), className)}
      data-selected={selected}
      id={id}
      data-testid={dataTestId}
      onClick={onClick}
      {...buttonProps}
    >
      {title ? (
        <Text variant="bodyL" weight="strong" className={clsx(cardTitle[variant], cardTitleStyle)}>
          {title}
        </Text>
      ) : null}

      {subtitle ? (
        <Text variant="bodyM" weight="strong" className={cardSubtitle[variant]}>
          {subtitle}
        </Text>
      ) : null}

      {children}
    </div>
  );
};
