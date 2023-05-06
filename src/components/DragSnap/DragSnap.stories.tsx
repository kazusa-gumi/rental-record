import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { DragSnap } from "./DragSnap";

export default {
  component: DragSnap,
  title: "DragSnap",
} as ComponentMeta<typeof DragSnap>;

const Template: ComponentStory<typeof DragSnap> = () => <DragSnap />;

export const DefaultDragSnap = Template.bind({});
DefaultDragSnap.args = {};
