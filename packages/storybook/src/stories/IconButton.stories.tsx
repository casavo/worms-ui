import { Button, colors, IconButton } from '@casavo/worms-ui';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const size = ['small', 'medium'];

const EditIcon: React.FC<{ className?: string; fill?: string }> = ({ className, fill = colors.greyscale600 }) => (
  <svg height="16" viewBox="0 0 12 12" width="16" xmlns="http://www.w3.org/2000/svg" className={className} fill={fill}>
    <path d="m7.373 4.013.614.614-6.04 6.04h-.614v-.614l6.04-6.04ZM9.773 0a.667.667 0 0 0-.466.193l-1.22 1.22 2.5 2.5 1.22-1.22c.26-.26.26-.68 0-.94l-1.56-1.56A.655.655 0 0 0 9.773 0Zm-2.4 2.127L0 9.5V12h2.5l7.373-7.373-2.5-2.5Z" />
  </svg>
);

const meta = {
  title: 'IconButton',
  component: IconButton,
  args: {
    onClick: action('clicked'),
  },
  argTypes: {
    disabled: { type: 'boolean', defaultValue: 'false', table: { type: { summary: 'boolean' } } },
    size: {
      options: size,
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(size) } },
    },
    onClick: {
      action: 'clicked',
      type: 'function',
      table: { type: { summary: '(e: PressEvent) => void' } },
    },
    children: { table: { disable: true } },
    title: { type: 'string', table: { type: { summary: 'string' } } },
    visuallyHiddenLabel: { type: 'string', table: { type: { summary: 'string' } } },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <EditIcon />, size: 'small', title: 'This IconButton edit something' },
};
