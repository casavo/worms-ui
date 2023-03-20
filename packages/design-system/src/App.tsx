import { useState } from 'react';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Spinner } from './components/Spinner';
import { themeClass } from './theme/theme.css';
import { colors, spacings } from './tokens';

export const BathroomIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = colors.greyscale900, ...props }) => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill={fill} {...props}>
    <path d="M12 0a4 4 0 0 1 4 4v7.5a3.5 3.5 0 0 1-1.999 3.163L14 15a1 1 0 1 1-2 0H4a1 1 0 1 1-2 0v-.337A3.5 3.5 0 0 1 0 11.5V9a1 1 0 0 1 1-1h13V4a2 2 0 0 0-1.85-1.995L12 2h-1.535c.34.588.535 1.271.535 2v2H3V4a4 4 0 0 1 4-4h5Zm2 10H2v1.5a1.5 1.5 0 0 0 1.356 1.493L3.5 13h9a1.5 1.5 0 0 0 1.493-1.355L14 11.5V10ZM7 2a2 2 0 0 0-1.995 1.85L5 4h4a2 2 0 0 0-1.85-1.995L7 2Z" />
  </svg>
);

function App() {
  const [selected, setSelected] = useState(false);

  return (
    <div className={themeClass}>
      <Box style={{ padding: spacings.xl, display: 'flex', gap: spacings.m, flexDirection: 'column' }}>
        <Box style={{ display: 'flex', gap: spacings.m, flexDirection: 'row' }}>
          <Button icon={(props) => <BathroomIcon {...props} />}>Primary button</Button>
          <Button disabled icon={(props) => <BathroomIcon {...props} />}>
            Disabled button
          </Button>
          <Button loading>Loading button</Button>
        </Box>
        <Box style={{ display: 'flex', gap: spacings.m, flexDirection: 'row' }}>
          <Button
            iconPosition="right"
            icon={(props) => <BathroomIcon {...props} />}
            onClick={() => {}}
            variant="secondary"
          >
            Secondary button
          </Button>
          <Button variant="secondary" disabled icon={(props) => <BathroomIcon {...props} />}>
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
