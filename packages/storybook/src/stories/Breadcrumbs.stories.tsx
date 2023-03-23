import { BreadcrumbItem, Breadcrumbs } from '@casavo/worms-ui';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: { children: '' },
  render: () => (
    <Breadcrumbs>
      <BreadcrumbItem href="/">Home</BreadcrumbItem>
      <BreadcrumbItem href="/" disabled>
        Offers bundle
      </BreadcrumbItem>
      <BreadcrumbItem href="/">All</BreadcrumbItem>
    </Breadcrumbs>
  ),
};
