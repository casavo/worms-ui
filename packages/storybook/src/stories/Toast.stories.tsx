import { Button, Toast, ToastAppearance, Toaster, useToasts } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const variants = ['default', 'defaultOnWhite', 'highlight', 'selected'];

const meta = {
  title: 'Toast',
  component: Toast,
  argTypes: {
    id: { table: { disable: true } },
    visible: { table: { disable: true } },
    type: { table: { disable: true } },
    ariaProps: { table: { disable: true } },
    pauseDuration: { table: { disable: true } },
    style: { table: { disable: true } },
    message: { table: { disable: true } },
    createdAt: { table: { disable: true } },
    appearance: {
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(Object.keys(ToastAppearance)) } },
      options: Object.keys(ToastAppearance),
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    createdAt: 1679663165691,
    visible: true,
    appearance: 'info',
    type: 'custom',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
    message: null,
    pauseDuration: 0,
    title: 'Title',
    content: 'This is a message',
    id: 'abcd',
    style: {},
  },
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
};

export const Example: Story = {
  args: {
    createdAt: 1679663165691,
    visible: true,
    appearance: 'info',
    type: 'custom',
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
    duration: 3000,
    message: null,
    pauseDuration: 0,
    title: 'Title',
    content: 'This is a info message',
    id: 'abcd',
    style: {},
  },
  render: () => {
    const { addToast } = useToasts();
    return (
      <>
        <Toaster />
        <Button onClick={() => addToast('This is an info message!', { title: 'This is a title' })}>
          Click to open toast
        </Button>
      </>
    );
  },
};
