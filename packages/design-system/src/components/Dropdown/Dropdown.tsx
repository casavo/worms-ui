import * as DropdownPrimative from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { contentStyle, itemStyle } from './Dropdown.css';

type DropdownAlign = React.ComponentProps<typeof DropdownPrimative.Content>['align'];

type DropdownProps = {
  trigger: React.ReactNode;
  'data-testid'?: string;
  children: React.ReactNode;
  dropdownAlign?: DropdownAlign;
  disabled?: boolean;
};

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  'data-testid': dataTestId,
  children,
  dropdownAlign = 'start',
  disabled,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownPrimative.Root open={open} onOpenChange={setOpen}>
        <DropdownPrimative.Trigger data-testid={dataTestId} disabled={disabled} asChild onClick={() => setOpen(true)}>
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
      {children}
    </DropdownPrimative.Item>
  );
};
