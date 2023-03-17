import clsx from 'clsx';
import { forwardRef, useRef } from 'react';
import { AriaLinkOptions, useLink } from 'react-aria';
import { Box } from '../Box';
import { Text } from '../Text';
import { linkStyle } from './Link.css';

type LinkProps = React.ComponentProps<'a'> & {
  'data-testid'?: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
  title?: string;
  isSmall?: boolean;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, 'data-testid': dataTestId, className, disabled, isSmall, ...props }, forwardedRef) => {
    const { linkProps } = useLink({ ...props, isDisabled: disabled }, forwardedRef);

    return (
      <a {...linkProps} {...props} data-testid={dataTestId} ref={forwardedRef} className={clsx(linkStyle, className)}>
        <Text as="span" variant={isSmall ? 'description' : 'bodyM'}>
          {children}
        </Text>
      </a>
    );
  }
);
