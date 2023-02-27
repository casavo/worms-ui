import { Text } from './components/Text';
import { themeClass } from './theme/theme.css';

function App() {
  return (
    <div className={themeClass}>
      <Text variant="display">Display</Text>
      <Text variant="h1">H1</Text>
      <Text variant="h2">H2</Text>
      <Text variant="h3">H3</Text>
      <Text variant="h4">H4</Text>
      <Text variant="bodyL">Body L</Text>
      <Text variant="bodyL" weight="strong">
        Body L - Strong
      </Text>
      <Text variant="bodyM">Body M</Text>
      <Text variant="bodyM" weight="strong">
        Body M - Strong
      </Text>
      <Text variant="description">Description</Text>
      <Text variant="caption">Caption</Text>
      <Text variant="small" dataTestId="small-text" as="span">
        Small text
      </Text>
    </div>
  );
}

export default App;
