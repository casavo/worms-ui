import { useState } from 'react';
import { Box } from './components/Box';
import { BreadcrumbItem, Breadcrumbs } from './components/Breadcrumbs';
import { Button } from './components/Button';
import { Dropdown, DropdownItem, TriggerButton, TriggerIconButton, TriggerMenu } from './components/Dropdown';
import { IconButton } from './components/IconButton';
import { RadioGroup, RadioGroupItem } from './components/RadioGroup';
import { Toaster, useToasts } from './components/Toast';
import { colors } from './tokens';

import './theme/reset.css';
import './theme/global.css';

export const EditIcon: React.FC<{ className?: string; fill?: string }> = ({
  className,
  fill = colors.greyscale600,
}) => (
  <svg height="16" viewBox="0 0 12 12" width="16" xmlns="http://www.w3.org/2000/svg" className={className} fill={fill}>
    <path d="m7.373 4.013.614.614-6.04 6.04h-.614v-.614l6.04-6.04ZM9.773 0a.667.667 0 0 0-.466.193l-1.22 1.22 2.5 2.5 1.22-1.22c.26-.26.26-.68 0-.94l-1.56-1.56A.655.655 0 0 0 9.773 0Zm-2.4 2.127L0 9.5V12h2.5l7.373-7.373-2.5-2.5Z" />
  </svg>
);

function App() {
  const { addToast } = useToasts();
  const [radio, setRadio] = useState<'default' | 'compact'>('compact');

  return (
    <div>
      <Box padding="x2l" display="flex" flexDirection={'column'} gap="l" alignItems={'flex-start'}>
        <Dropdown loading trigger={<TriggerButton>Click to open</TriggerButton>}>
          <DropdownItem>First item</DropdownItem>
          <DropdownItem>Second item</DropdownItem>
        </Dropdown>

        <Dropdown disabled trigger={<TriggerButton variant="secondary">Click to open</TriggerButton>}>
          <DropdownItem>First item</DropdownItem>
          <DropdownItem>Second item</DropdownItem>
        </Dropdown>

        <Dropdown
          trigger={
            <TriggerIconButton>
              <EditIcon />
            </TriggerIconButton>
          }
        >
          <DropdownItem>First item</DropdownItem>
          <DropdownItem>Second item</DropdownItem>
        </Dropdown>

        <Dropdown trigger={<TriggerMenu>Menu</TriggerMenu>}>
          <DropdownItem>First item</DropdownItem>
          <DropdownItem>Second item</DropdownItem>
        </Dropdown>

        <Dropdown trigger={<TriggerMenu>Menu</TriggerMenu>}>
          <DropdownItem>First item</DropdownItem>
          <DropdownItem>Second item</DropdownItem>
        </Dropdown>
      </Box>

      <RadioGroup value={radio} onChange={(value) => setRadio(value)} variant="orangeB2C">
        <RadioGroupItem id="default" label="Default" value="default" />
        <RadioGroupItem id="compact" label="Compact" value="compact" />
      </RadioGroup>
      <RadioGroup value={radio} onChange={(value) => setRadio(value)} variant="deepGreen">
        <RadioGroupItem id="default" label="Default" value="default" />
        <RadioGroupItem id="compact" label="Compact" value="compact" />
      </RadioGroup>
      <RadioGroup value={radio} onChange={(value) => setRadio(value)} variant="greenB2B">
        <RadioGroupItem id="default" label="Default" value="default" />
        <RadioGroupItem id="compact" label="Compact" value="compact" />
      </RadioGroup>
      <RadioGroup value={radio} onChange={(value) => setRadio(value)} variant="light" size="small">
        <RadioGroupItem id="default" label="Default" value="default" />
        <RadioGroupItem id="compact" label="Compact" value="compact" />
      </RadioGroup>

      <Box padding="xl" display="flex" gap="m">
        <IconButton title="Edit" visuallyHiddenLabel="hello, I can edit" onClick={() => console.log('hello')}>
          <EditIcon />
        </IconButton>
        <IconButton disabled title="Edit" visuallyHiddenLabel="hello, I can edit">
          <EditIcon />
        </IconButton>
        <IconButton title="Edit" visuallyHiddenLabel="hello, I can edit" size="medium">
          <EditIcon />
        </IconButton>
      </Box>

      <Box padding="xl" display="flex" gap="m">
        <IconButton onClick={() => console.log('sono disabilitato')}>
          <EditIcon />
        </IconButton>
        <Button onClick={() => console.log('hello')}>
          <EditIcon /> Hello!
        </Button>
      </Box>
      <Box padding="l">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem disabled>Leads</BreadcrumbItem>
          <BreadcrumbItem href="/">To book</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
      <Box padding="l">
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem href="/">Offers bundle</BreadcrumbItem>
          <BreadcrumbItem href="/">All</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
      <Box padding="xl">
        <Button
          onClick={() => addToast('This is a info message', { appearance: 'info', title: 'Title', duration: Infinity })}
        >
          Open INFO
        </Button>
        <Button onClick={() => addToast('This is a warning message', { appearance: 'warning', title: 'Title' })}>
          Open WARNING
        </Button>
        <Button onClick={() => addToast('This is a success message', { appearance: 'success', title: 'Title' })}>
          Open SUCCESS
        </Button>
        <Button onClick={() => addToast('This is a error message', { appearance: 'error', title: 'Title' })}>
          Open ERROR
        </Button>
      </Box>
      <Toaster />
    </div>
  );
}

export default App;
