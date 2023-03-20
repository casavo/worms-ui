import { useState } from 'react';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Spinner } from './components/Spinner';
import { themeClass } from './theme/theme.css';
import { spacings } from './tokens';

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={themeClass}>
      <Box style={{ padding: spacings.xl, display: 'flex', gap: spacings.m, flexDirection: 'column' }}>
        <Box style={{ display: 'flex', gap: spacings.m, flexDirection: 'row' }}>
          <Button
            icon={(props) => (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0058 1.33325L14.6668 5.03696V14.6666H1.3335V5.03696L8.0058 1.33325ZM8.00516 3.23909L3.00016 6.01742V12.9999H13.0002V6.01659L8.00516 3.23909Z"
                />
              </svg>
            )}
          >
            Primary button
          </Button>
          <Button
            disabled
            icon={(props) => (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0058 1.33325L14.6668 5.03696V14.6666H1.3335V5.03696L8.0058 1.33325ZM8.00516 3.23909L3.00016 6.01742V12.9999H13.0002V6.01659L8.00516 3.23909Z"
                />
              </svg>
            )}
          >
            Disabled button
          </Button>
          <Button loading>Loading button</Button>
        </Box>
        <Box style={{ display: 'flex', gap: spacings.m, flexDirection: 'row' }}>
          <Button
            iconPosition="right"
            icon={(props) => (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0058 1.33325L14.6668 5.03696V14.6666H1.3335V5.03696L8.0058 1.33325ZM8.00516 3.23909L3.00016 6.01742V12.9999H13.0002V6.01659L8.00516 3.23909Z"
                />
              </svg>
            )}
            onClick={() => {}}
            variant="secondary"
          >
            Secondary button
          </Button>
          <Button
            variant="secondary"
            disabled
            icon={(props) => (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.0058 1.33325L14.6668 5.03696V14.6666H1.3335V5.03696L8.0058 1.33325ZM8.00516 3.23909L3.00016 6.01742V12.9999H13.0002V6.01659L8.00516 3.23909Z"
                />
              </svg>
            )}
          >
            Disabled button
          </Button>
          <Button variant="secondary" loading>
            Loading button
          </Button>
        </Box>
      </Box>
      <Box
        style={{ padding: spacings.xl, display: 'flex', gap: spacings.m, flexDirection: 'column' }}
        background="offWhite"
      >
        <Box style={{ display: 'flex', gap: spacings.m, flexDirection: 'row' }}>
          <Button>Primary button</Button>
          <Button disabled>Disabled button</Button>
          <Button loading>Loading button</Button>
        </Box>
        <Box style={{ display: 'flex', gap: spacings.m, flexDirection: 'row' }}>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="secondary" disabled>
            Disabled button
          </Button>
          <Button title="xxx" variant="secondary" loading>
            Loading button
          </Button>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap="l" background="deepGreen100" padding="l">
        <Spinner />
        <Spinner variant="secondary" />
      </Box>
    </div>
  );
}

export default App;
