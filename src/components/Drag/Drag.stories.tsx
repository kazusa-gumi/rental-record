import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { DraggableStory } from "./Drag";

export default {
  component: DraggableStory,
  title: "DraggableStory",
} as ComponentMeta<typeof DraggableStory>;

const Template: ComponentStory<typeof DraggableStory> = () => (
  <DraggableStory />
);

export const DefaultDraggableStory = Template.bind({});
DefaultDraggableStory.args = {};
