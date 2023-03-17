import { useState } from 'react';
import { Box } from './components/Box';
import { Button } from './components/Button';
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

      <Box style={{ padding: spacings.x5l, display: 'flex', gap: spacings.m, flexDirection: 'column' }}>
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
          <Button variant="secondary" loading>
            Loading button
          </Button>
        </Box>
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
