import { Badge } from './components/Badge';
import { Box } from './components/Box';
import { themeClass } from './theme/theme.css';
import { colors } from './tokens';

function App() {
  return (
    <div className={themeClass}>
      <Box
        padding="x2l"
        background="deepGreen100"
        display="flex"
        style={{ gap: 24 }}
        flexDirection="column"
        alignItems="flex-start"
      >
        <Badge>success</Badge>

        <Box display="flex" style={{ gap: 8 }}>
          <Badge>success</Badge>
          <Badge withIcon>success</Badge>
          <Badge inverted>success inverted</Badge>
          <Badge inverted withIcon>
            success inverted
          </Badge>
        </Box>

        <Box display="flex" style={{ gap: 8 }}>
          <Badge variant="warning">warning</Badge>
          <Badge variant="warning" withIcon>
            warning
          </Badge>
          <Badge variant="warning" inverted>
            warning inverted
          </Badge>
          <Badge variant="warning" inverted withIcon>
            warning inverted
          </Badge>
        </Box>

        <Box display="flex" style={{ gap: 8 }}>
          <Badge variant="error">error</Badge>
          <Badge variant="error" withIcon>
            error
          </Badge>
          <Badge variant="error" inverted>
            error inverted
          </Badge>
          <Badge variant="error" inverted withIcon>
            error inverted
          </Badge>
        </Box>

        <Box display="flex" style={{ gap: 8 }}>
          <Badge variant="orangeB2C">orangeB2C</Badge>
          <Badge variant="orangeB2C" withIcon>
            orangeB2C
          </Badge>
          <Badge variant="orangeB2C" inverted>
            orangeB2C inverted
          </Badge>
          <Badge variant="orangeB2C" inverted withIcon>
            orangeB2C inverted
          </Badge>
        </Box>

        <Box display="flex" style={{ gap: 8 }}>
          <Badge variant="greenB2B">greenB2B</Badge>
          <Badge variant="greenB2B" withIcon>
            greenB2B
          </Badge>
          <Badge variant="greenB2B" inverted>
            greenB2B inverted
          </Badge>
          <Badge variant="greenB2B" inverted withIcon>
            greenB2B inverted
          </Badge>
        </Box>

        <Box display="flex" style={{ gap: 8 }}>
          <Badge variant="deepGreen">deepGreen</Badge>
          <Badge variant="deepGreen" withIcon>
            deepGreen
          </Badge>
          <Badge variant="deepGreen" inverted>
            deepGreen inverted
          </Badge>
          <Badge variant="deepGreen" inverted withIcon>
            deepGreen inverted
          </Badge>
        </Box>

        <Box display="flex" style={{ gap: 8 }}>
          <Badge variant="light">light</Badge>
          <Badge variant="light" withIcon>
            light
          </Badge>
          <Badge variant="light" inverted>
            light inverted
          </Badge>
          <Badge variant="light" inverted withIcon>
            light inverted
          </Badge>
        </Box>
      </Box>
    </div>
  );
}

export default App;
