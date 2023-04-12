import '@casavo/worms-ui/style.css';

export const decorators = [
  (Story) => (
    <div>
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
