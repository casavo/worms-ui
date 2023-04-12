import * as DropdownPrimative from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { contentStyle, itemStyle } from './Dropdown.css';
import { Text } from '../Text';

type DropdownAlign = React.ComponentProps<typeof DropdownPrimative.Content>['align'];

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
      <DropdownPrimative.Root open={open} onOpenChange={setOpen}>
        <DropdownPrimative.Trigger
          data-testid={dataTestId}
          disabled={disabled || loading}
          asChild
          onClick={() => setOpen(true)}
          {...triggerProps}
        >
          {trigger}
        </DropdownPrimative.Trigger>

        <DropdownPrimative.Portal>
          <DropdownPrimative.Content
            className={contentStyle}
            align={dropdownAlign}
            data-testid="opened-menu"
            sideOffset={8}
          >
            {children}
          </DropdownPrimative.Content>
        </DropdownPrimative.Portal>
      </DropdownPrimative.Root>
    </>
  );
};

type DropdownItemProps = React.ComponentProps<typeof DropdownPrimative.Item> & {
  'data-testid'?: string;
};

export const DropdownItem: React.FC<DropdownItemProps> = ({ children, 'data-testid': dataTestId, ...props }) => {
  return (
    <DropdownPrimative.Item data-testid={dataTestId} className={itemStyle} {...props}>
      <Text>{children}</Text>
    </DropdownPrimative.Item>
  );
};
