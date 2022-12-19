import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Heading } from "./Heading";

export default {
  title: "Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => {
  return <Heading {...args}>My Heading</Heading>;
};

export const Base = Template.bind({});
Base.args = {
  size: "h1",
};
