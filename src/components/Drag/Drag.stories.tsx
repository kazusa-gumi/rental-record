import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { DefaultDraggable } from "./DefaultDraggable";

export default {
  component: DefaultDraggable,
  title: "DefaultDraggable",
} as ComponentMeta<typeof DefaultDraggable>;

const Template: ComponentStory<typeof DefaultDraggable> = () => (
  <DefaultDraggable />
);

export const DefaultDraggableStory = Template.bind({});
DefaultDraggableStory.args = {};
