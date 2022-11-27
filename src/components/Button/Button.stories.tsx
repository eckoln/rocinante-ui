import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsArrowRight } from "react-icons/bs";

import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Default: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Base = Default.bind({});
Default.args = {
  intent: "primary",
  size: "sm",
};

const WithIcon: ComponentStory<typeof Button> = (args) => {
  return (
    <Button startIcon={BsArrowRight} {...args}>
      Button
    </Button>
  );
};

export const StartIcon = WithIcon.bind({});
Default.args = {
  intent: "primary",
  size: "sm",
  startIcon: BsArrowRight,
};
