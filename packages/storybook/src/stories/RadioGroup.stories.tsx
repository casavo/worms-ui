import { RadioGroupVariant, RadioGroup, RadioGroupItem } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { getTypeDelimitedWithPipe } from '../utils/get-type-delimited-with-pipe';

const variants = Object.keys(RadioGroupVariant);
const size = ['small', 'medium'];
const orientation = ['horizontal', 'vertical'];

const meta = {
  title: 'RadioGroup',
  component: RadioGroup,
  argTypes: {
    orientation: {
      control: 'select',
      options: orientation,
      table: { type: { summary: getTypeDelimitedWithPipe(orientation) } },
    },

    size: {
      control: 'select',
      options: size,
      table: { type: { summary: getTypeDelimitedWithPipe(size) } },
    },
    variant: {
      control: 'select',
      options: variants,
      table: { type: { summary: getTypeDelimitedWithPipe(variants) } },
    },
    value: { table: { disable: true } },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { value: '' },
  render: ({ variant, size, orientation }) => {
    const [value, setValue] = useState<'orange' | 'apple'>('orange');
    return (
      <RadioGroup
        value={value}
        onChange={(value) => setValue(value)}
        variant={variant}
        size={size}
        orientation={orientation}
      >
        <RadioGroupItem id="orange" label="Orange" value="orange" />
        <RadioGroupItem id="apple" label="Apple" value="apple" />
      </RadioGroup>
    );
  },
};
