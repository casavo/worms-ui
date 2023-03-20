import clsx from 'clsx';
import { forwardRef } from 'react';
import { useLink } from 'react-aria';
import { useShareForwardedRef } from '../../utils/useShareForwardedRef';
import { Text } from '../Text';
import { linkStyle } from './Link.css';

type LinkProps = {
  'data-testid'?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  isSmall?: boolean;
  rel?: React.ComponentProps<'a'>['rel'];
  target?: string;
  title?: string;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, 'data-testid': dataTestId, className, disabled, isSmall, ...props }, forwardedRef) => {
    const ref = useShareForwardedRef(forwardedRef);
    const { linkProps } = useLink({ ...props, isDisabled: disabled }, ref);

    return (
      <a {...linkProps} {...props} data-testid={dataTestId} ref={ref} className={clsx(linkStyle, className)}>
        <Text as="span" variant={isSmall ? 'description' : 'bodyM'}>
          {children}
        </Text>
      </a>
    );
  }
);
