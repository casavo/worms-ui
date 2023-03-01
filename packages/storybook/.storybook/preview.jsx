import { wormsUiThemeClass } from '@casavo/worms-ui';
import '@casavo/worms-ui/style.css';

export const decorators = [
  (Story) => (
    <div className={wormsUiThemeClass}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
