import { Box } from './components/Box';
import { Separator } from './components/Separator';
import { Text } from './components/Text';
import { themeClass } from './theme/theme.css';
import { spacings } from './tokens';

function App() {
  return (
    <div className={themeClass}>
      <Box display={'flex'} flexDirection={'column'} style={{ gap: spacings.l }}>
        <Box
          background="deepGreen100"
          style={{ borderRadius: spacings.s, gap: spacings.m }}
          padding="l"
          display={'flex'}
          flexDirection={'column'}
        >
          <Text variant="display">Display</Text>
          <Separator />
          <Text variant="bodyM">Body M</Text>
        </Box>

        <Box
          background="deepGreen100"
          style={{ borderRadius: spacings.s, gap: spacings.m, height: 150 }}
          padding="l"
          display={'flex'}
        >
          <Box style={{ flex: 1 }}>
            <Text variant="h4">Title</Text>
            <Text variant="bodyM">Lorem ipsum</Text>
          </Box>
          <Separator orientation="vertical" />
          <Box style={{ flex: 1 }}>
            <Text variant="h4">Title</Text>
            <Text variant="bodyM">Lorem ipsum</Text>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
