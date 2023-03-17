import clsx from 'clsx';
import { useRef } from 'react';
import { useBreadcrumbItem, useBreadcrumbs } from 'react-aria';
import { Text } from '../Text';
import { linkRecipe, olStyle } from './Breadcrumbs.css';

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

type BreadcrumbItemProps = {
  children: string;
  isCurrent?: boolean;
  href?: string;
};

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ children, isCurrent, href }) => {
  let ref = useRef<HTMLAnchorElement | null>(null);
  const { itemProps } = useBreadcrumbItem({ children, isCurrent, elementType: 'div' }, ref);
  return (
    <Text variant="description" {...itemProps} as="li" className={clsx(linkRecipe({ isCurrent }))}>
      <a {...itemProps} href={href} ref={ref}>
        {children}
      </a>
    </Text>
  );
};
