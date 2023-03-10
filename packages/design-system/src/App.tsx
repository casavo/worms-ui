import { useState } from 'react';
import { Box } from './components/Box';
import { Card } from './components/Card';
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
          <Card onClick={() => setSelected((b) => !b)} title="I'm a title" variant={selected ? 'selected' : 'default'}>
            <p>Children!</p>
          </Card>
        ))}
      </Box>

      <Box display="flex" flexDirection="column" gap="l" marginTop="x5l">
        <Card onClick={() => setSelected((b) => !b)} variant={selected ? 'selected' : 'default'} title="I'm a title" />

        <Card title="I'm a title" />

        <Card variant="highlight" title="I'm a title">
          <Box display="flex" flexDirection="column">
            <div>Sono un children qualsiasi!</div>
            <div>Sono un children qualsiasi!</div>
          </Box>
        </Card>

        <Card variant="defaultOnWhite" title="I'm a title" />

        <Card variant={selected ? 'selected' : 'default'} title="I'm a title" onClick={() => setSelected((b) => !b)} />

        <Card variant={selected ? 'selected' : 'default'} title="I'm a title" />
      </Box>
    </div>
  );
}

export default App;
