import { useState } from 'react';
import { Box } from './components/Box';
import { Card } from './components/Card';
import { Text } from './components/Text';
import { themeClass } from './theme/theme.css';
import { spacings } from './tokens';

function App() {
  const [selected, setSelected] = useState(false);
  return (
    <div className={themeClass}>
      <Box
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: spacings.l, padding: spacings.x5l }}
        background="offWhite"
      >
        {Array.from({ length: 8 }).map(() => (
          <Card
            onClick={() => setSelected((b) => !b)}
            title="I'm a title"
            subtitle="I'm a subtitle"
            selected={selected}
          />
        ))}
      </Box>

      <Box display="flex" flexDirection="column" gap="l" marginTop="x5l">
        <Card
          onClick={() => setSelected((b) => !b)}
          selected={selected}
          title="I'm a title"
          subtitle="I'm a subtitle"
        />

        <Card title="I'm a title" subtitle="I'm a subtitle" />

        <Card variant="highlight" title="I'm a title" subtitle="I'm a subtitle">
          <Box display="flex" flexDirection="column" gap="l" paddingTop={'l'}>
            <div>Sono un children qualsiasi!</div>
            <div>Sono un children qualsiasi!</div>
          </Box>
        </Card>

        <Card variant="defaultOnWhite" title="I'm a title" subtitle="I'm a subtitle" />

        <Card
          variant="defaultOnWhite"
          title="I'm a title"
          subtitle="I'm a subtitle"
          onClick={() => setSelected((b) => !b)}
          selected={selected}
        />

        <Card variant="default" selected={true} title="I'm a title" subtitle="I'm a subtitle" />
      </Box>
    </div>
  );
}

export default App;
