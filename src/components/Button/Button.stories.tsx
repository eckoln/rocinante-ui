import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsArrowRight } from "react-icons/bs";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Button</Button>;
};

export const Base = Template.bind({});
Base.args = {
  variant: "primary",
  size: "sm",
};

export const WithStartIcon = Template.bind({});
WithStartIcon.args = {
  variant: "primary",
  size: "sm",
  startIcon: <BsArrowRight />,
};

export const WithEndIcon = Template.bind({});
WithEndIcon.args = {
  variant: "primary",
  size: "sm",
  endIcon: <BsArrowRight />,
};
