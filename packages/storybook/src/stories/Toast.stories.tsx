import { Button, ToastAppearance, Toaster, useToasts, Toast } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const variants = ['default', 'defaultOnWhite', 'highlight', 'selected'];

const meta = {
  title: 'Toast',
  component: Toast,
  argTypes: {
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
  render: () => {
    const { addToast } = useToasts();
    return (
      <>
        <Button onClick={() => addToast('Info toast')}>Click to open toast</Button>
        <Toaster />
      </>
    );
  },
};
