import { StoryObj, Meta } from "@storybook/react";
import { ColorWheel } from "./ColorWheel";

const meta: Meta<typeof ColorWheel> = {
  component: ColorWheel,
} 

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {}
}