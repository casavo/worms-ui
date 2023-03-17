import { Box } from './components/Box';
import { Button } from './components/Button';
import { IconButton } from './components/IconButton';
import { BreadcrumbItem, Breadcrumbs } from './components/Breadcrumbs';
import { themeClass } from './theme/theme.css';
import { colors } from './tokens';

export const EditIcon: React.FC<{ className?: string; fill?: string }> = ({
  className,
  fill = colors.greyscale600,
}) => (
  <svg height="16" viewBox="0 0 12 12" width="16" xmlns="http://www.w3.org/2000/svg" className={className} fill={fill}>
    <path d="m7.373 4.013.614.614-6.04 6.04h-.614v-.614l6.04-6.04ZM9.773 0a.667.667 0 0 0-.466.193l-1.22 1.22 2.5 2.5 1.22-1.22c.26-.26.26-.68 0-.94l-1.56-1.56A.655.655 0 0 0 9.773 0Zm-2.4 2.127L0 9.5V12h2.5l7.373-7.373-2.5-2.5Z" />
  </svg>
);

import './theme/global.css';
import './theme/reset.css';

function App() {
  return (
    <div className={themeClass}>
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
        <Button onClick={() => console.log('hello')}>Hello!</Button>
      </Box>
      <Box padding="l">
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Leads</BreadcrumbItem>
          <BreadcrumbItem isCurrent>To book</BreadcrumbItem>
        </Breadcrumbs>
      </Box>
    </div>
  );
}

export default App;
