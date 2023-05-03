import clsx from 'clsx';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { useBreadcrumbItem, useBreadcrumbs } from 'react-aria';
import { useShareForwardedRef } from '../../utils/useShareForwardedRef';
import { Link } from '../Link';
import { Text } from '../Text';
import { breadcrumbItemLinkStyle, breadcrumbItemStyle, olStyle } from './Breadcrumbs.css';

type BreadcrumbItemProps = {
  className?: string;
  children: string;
  disabled?: boolean;
  href?: string;
};

export const BreadcrumbItem = forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  ({ children, href, disabled, className, ...props }, forwardedRef) => {
    const ref = useShareForwardedRef(forwardedRef);
    const { itemProps } = useBreadcrumbItem({ children, elementType: 'div', isDisabled: disabled, ...props }, ref);

    return (
      <Text as="li" className={clsx(breadcrumbItemStyle, className)} variant="description">
        <Link {...itemProps} ref={ref} href={href} className={breadcrumbItemLinkStyle} disabled={disabled} isSmall>
          {children}
        </Link>
      </Text>
    );
  }
);

type BreadcrumbsProps = {
  children: React.ReactNode;
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ children }) => {
  const { navProps } = useBreadcrumbs({});

  const count = Children.count(children);
  const clones = Children.map(children as React.ReactElement[], (child, index) =>
    cloneElement(child, { isCurrent: count === index + 1 })
  );

  return (
    <nav {...navProps}>
      <ol className={olStyle}>{clones}</ol>
    </nav>
  );
};
