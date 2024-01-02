import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';
//import  SwitchProps from "./Switch.d";

const meta = {
  title: 'UI/Switch',
  component: Switch,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { option1: 'op1', option2: 'op2', width:'200' },
};