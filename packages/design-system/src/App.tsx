import { useState } from 'react';
import { Box } from './components/Box';
import { Button } from './components/Button';
import { Spinner } from './components/Spinner';
import { Card } from './components/Card';
import { Link } from './components/Link';
import { themeClass } from './theme/theme.css';
import { colors, spacings } from './tokens';

export const BathroomIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ fill = colors.greyscale900, ...props }) => (
  <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" fill={fill} {...props}>
    <path d="M12 0a4 4 0 0 1 4 4v7.5a3.5 3.5 0 0 1-1.999 3.163L14 15a1 1 0 1 1-2 0H4a1 1 0 1 1-2 0v-.337A3.5 3.5 0 0 1 0 11.5V9a1 1 0 0 1 1-1h13V4a2 2 0 0 0-1.85-1.995L12 2h-1.535c.34.588.535 1.271.535 2v2H3V4a4 4 0 0 1 4-4h5Zm2 10H2v1.5a1.5 1.5 0 0 0 1.356 1.493L3.5 13h9a1.5 1.5 0 0 0 1.493-1.355L14 11.5V10ZM7 2a2 2 0 0 0-1.995 1.85L5 4h4a2 2 0 0 0-1.85-1.995L7 2Z" />
  </svg>
);

function App() {
  const [selected, setSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className={themeClass}>
      <Box padding="l" display="flex" gap="m">
        <Link rel="noreferrer" href="/">
          Hello Link!
        </Link>
        <Link disabled href="/">
          Disabled
        </Link>
        <Link title="Provami!" href="/">
          With title
        </Link>
        <Link target="_blank" href="/">
          Target
        </Link>
      </Box>
      <Box padding="l" display="flex" gap="m">
        <Link isSmall href="/">
          Hello Link!
        </Link>
        <Link isSmall disabled href="/">
          Disabled
        </Link>
        <Link isSmall title="Provami!" href="/">
          With title
        </Link>
        <Link isSmall target="_blank" href="/">
          Target
        </Link>
      </Box>
    </div>
  );
}

export default App;
