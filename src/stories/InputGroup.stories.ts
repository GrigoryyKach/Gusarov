import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup, InputGroupProps } from '../components/InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    label: { control: 'text' },
    input: { control: 'object' },
    annotation: { control: 'object' },
    helpText: { control: 'text' },
    errorMessage: { control: 'text' },
    darkMode: { control: 'boolean' },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<InputGroupProps>;

export const Default: Story = {
  args: {
    label: 'Label',
    input: {
      value: '',
      placeholder: 'Enter text...',
      required: true,
    },
    annotation: {
      text: 'This is an error annotation',
      type: 'error',
      showIcon: true,
    },
    helpText: 'This is some helpful text.',
    darkMode: false,
  },
};

export const DarkMode: Story = {
  args: {
    ...Default.args,
    darkMode: true,
  },
};
