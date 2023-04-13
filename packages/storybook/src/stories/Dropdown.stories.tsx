import { Box, Dropdown, DropdownItem, TriggerButton } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const align = ['center', 'end', 'start'];

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    children: { table: { disable: true } },
    trigger: { table: { disable: true } },
    loading: { type: 'boolean', defaultValue: 'false', table: { type: { summary: 'boolean' } } },
    disabled: { type: 'boolean', defaultValue: 'false', table: { type: { summary: 'boolean' } } },
    dropdownAlign: {
      options: align,
      control: 'select',
      table: { type: { summary: getTypeDelimitedWithPipe(align) } },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <>
        <DropdownItem>Save and close</DropdownItem>
        <DropdownItem>Save and schedule</DropdownItem>
      </>
    ),
    trigger: <TriggerButton>Save</TriggerButton>,
    disabled: false,
    loading: false,
  },
  decorators: [
    (Story) => (
      <Box padding="x4l">
        <Story />
      </Box>
    ),
  ],
};
