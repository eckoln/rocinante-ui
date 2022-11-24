import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Filled: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Button</Button>;
};
