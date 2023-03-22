import clsx from 'clsx';
import { forwardRef } from 'react';
import { useBreadcrumbItem, useBreadcrumbs } from 'react-aria';
import { useShareForwardedRef } from '../../utils/useShareForwardedRef';
import { Link } from '../Link';
import { Text } from '../Text';
import { breadcrumbItemLinkStyle, breadcrumbItemRecipe, olStyle } from './Breadcrumbs.css';

type BreadcrumbItemProps = {
  children: string;
  disabled?: boolean;
  href?: string;
  isCurrent?: boolean;
};

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ children, isCurrent, href, disabled }, forwardedRef) => {
    const ref = useShareForwardedRef(forwardedRef);
    const { itemProps } = useBreadcrumbItem({ children, isCurrent, elementType: 'div' }, ref);
    return (
      <Text
        {...itemProps}
        as="li"
        className={clsx(breadcrumbItemRecipe({ isCurrent }))}
        ref={ref}
        variant="description"
      >
        {isCurrent ? (
          children
        ) : (
          <Link href={href} className={breadcrumbItemLinkStyle} disabled={disabled} isSmall>
            {children}
          </Link>
        )}
      </Text>
    );
  }
);

type BreadcrumbsProps = {
  children: React.ReactNode;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children }) => {
  const { navProps } = useBreadcrumbs({});

  return (
    <nav {...navProps}>
      <ol className={olStyle}>{children}</ol>
    </nav>
  );
};
