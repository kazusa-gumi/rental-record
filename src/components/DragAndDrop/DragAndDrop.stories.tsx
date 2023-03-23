import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { DndContextComponent } from "./DndContextComponent";

export default {
  component: DndContextComponent,
  title: "DndContextComponent",
} as ComponentMeta<typeof DndContextComponent>;

const Template: ComponentStory<typeof DndContextComponent> = () => (
  <DndContextComponent />
);

export const DefaultDndContextComponent = Template.bind({});
DefaultDndContextComponent.args = {};
