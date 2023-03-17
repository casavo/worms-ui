import { forwardRef } from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { badgeRecipe, BadgeVariants, iconStyle } from './Badge.css';
import { badgeIcon } from './Icons';

type BadgeProps = {
  'data-testid'?: string;
  children: React.ReactNode;
  withIcon?: boolean;
} & BadgeVariants;

export const Badge = forwardRef<HTMLParagraphElement, BadgeProps>(
  ({ children, inverted, variant = 'success', withIcon, 'data-testid': dataTestId }, forwardedRef) => {
    const Icon = badgeIcon[variant];
    return (
      <Text
        variant="caption"
        className={badgeRecipe({ inverted, variant })}
        data-testid={dataTestId}
        ref={forwardedRef}
      >
        <Box as="span" display="flex" gap="xs" alignItems="center">
          {withIcon ? <Icon className={iconStyle[variant]} /> : null}
          {children}
        </Box>
      </Text>
    );
  }
);
