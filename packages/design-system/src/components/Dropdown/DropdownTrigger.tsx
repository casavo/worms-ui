import React, { forwardRef } from 'react';
import { Box } from '../Box';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { chevronIconStyle, triggerIconButtonStyle, triggerMenuStyle } from './DropdownTrigger.css';

type TriggerButtonProps = Omit<React.ComponentProps<typeof Button>, 'onClick'>;

export const TriggerButton = forwardRef<HTMLButtonElement, TriggerButtonProps>(
  ({ children, 'data-testid': dataTestId, ...props }, forwardedRef) => {
    return (
      <Button data-testid={dataTestId} ref={forwardedRef} {...props}>
        <Box display="flex" alignItems="center" gap="s" as="span">
          {children}
          <ChevronDownIcon {...props} />
        </Box>
      </Button>
    );
  }
);

type TriggerMenuProps = Omit<TriggerButtonProps, 'variant'>;

export const TriggerMenu = forwardRef<HTMLButtonElement, TriggerMenuProps>(
  ({ children, 'data-testid': dataTestId, ...props }, forwardedRef) => {
    return (
      <Button data-testid={dataTestId} ref={forwardedRef} className={triggerMenuStyle} variant="secondary" {...props}>
        <Box display="flex" alignItems="center" gap="s" as="span">
          {children}
          <ChevronDownIcon {...props} />
        </Box>
      </Button>
    );
  }
);

type TriggerIconButtonProps = Omit<React.ComponentProps<typeof IconButton>, 'onClick'>;

export const TriggerIconButton = forwardRef<HTMLButtonElement, TriggerIconButtonProps>(
  ({ children, 'data-testid': dataTestId, ...props }, forwardedRef) => {
    return (
      <IconButton data-testid={dataTestId} ref={forwardedRef} className={triggerIconButtonStyle} {...props}>
        {children}
      </IconButton>
    );
  }
);

const ChevronDownIcon: React.FC = ({ ...props }) => (
  <svg
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
    className={chevronIconStyle}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M14.6667 5.90702L8 12.6667L1.33334 5.90701L2.55663 4.66666L8 10.1852L13.4434 4.66666L14.6667 5.90702Z"
    />
  </svg>
);
