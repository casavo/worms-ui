import { forwardRef } from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { badgeRecipe, BadgeRecipeVariants, iconStyle } from './Badge.css';
import { badgeIcon } from './Icons';
import { CommonBaseProps } from 'src/global';
import clsx from 'clsx';

type BadgeProps = CommonBaseProps & {
  children: React.ReactNode;
  withIcon?: boolean;
} & BadgeRecipeVariants;

export const Badge = forwardRef<HTMLParagraphElement, BadgeProps>(
  (
    { children, inverted, variant = 'success', withIcon, 'data-testid': dataTestId, className, ...props },
    forwardedRef
  ) => {
    const Icon = badgeIcon[variant];
    return (
      <Text
        variant="caption"
        className={clsx(badgeRecipe({ inverted, variant }), className)}
        data-testid={dataTestId}
        ref={forwardedRef}
        {...props}
      >
        <Box as="span" display="flex" gap="xs" alignItems="center">
          {withIcon ? <Icon className={iconStyle[variant]} /> : null}
          {children}
        </Box>
      </Text>
    );
  }
);
