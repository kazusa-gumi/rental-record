import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ResizableComponent } from "./ResizeComponent";

export default {
  component: ResizableComponent,
  title: "ResizeComponent",
} as ComponentMeta<typeof ResizableComponent>;

const Template: ComponentStory<typeof ResizableComponent> = () => (
  <ResizableComponent />
);

export const DefaultDraggableStory = Template.bind({});
DefaultDraggableStory.args = {};
