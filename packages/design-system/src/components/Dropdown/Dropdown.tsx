import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { contentStyle, itemStyle } from './Dropdown.css';
import { Text } from '../Text';

type DropdownAlign = React.ComponentProps<typeof DropdownPrimitive.Content>['align'];

type DropdownProps = {
  trigger: React.ReactNode;
  'data-testid'?: string;
  children: React.ReactNode;
  dropdownAlign?: DropdownAlign;
  disabled?: boolean;
  loading?: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  'data-testid': dataTestId,
  children,
  dropdownAlign = 'start',
  disabled,
  loading,
}) => {
  const [open, setOpen] = useState(false);

  const triggerProps = { loading };

  return (
    <>
      <DropdownPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownPrimitive.Trigger
          data-testid={dataTestId}
          disabled={disabled || loading}
          asChild
          onClick={() => setOpen(true)}
          {...triggerProps}
        >
          {trigger}
        </DropdownPrimitive.Trigger>

        <DropdownPrimitive.Portal>
          <DropdownPrimitive.Content
            className={contentStyle}
            align={dropdownAlign}
            data-testid="opened-menu"
            sideOffset={8}
          >
            {children}
          </DropdownPrimitive.Content>
        </DropdownPrimitive.Portal>
      </DropdownPrimitive.Root>
    </>
  );
};

type DropdownItemProps = React.ComponentProps<typeof DropdownPrimitive.Item> & {
  'data-testid'?: string;
};

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, 'data-testid': dataTestId, ...props }) => {
  return (
    <DropdownPrimitive.Item data-testid={dataTestId} className={itemStyle} {...props}>
      <Text>{children}</Text>
    </DropdownPrimitive.Item>
  );
};
