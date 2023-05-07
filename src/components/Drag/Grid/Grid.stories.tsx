import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { GridStackComponent } from "./Grid";

export default {
  component: GridStackComponent,
  title: "GridStackComponent",
} as ComponentMeta<typeof GridStackComponent>;

const Template: ComponentStory<typeof GridStackComponent> = () => (
  <GridStackComponent />
);

export const DefaultGridStackComponent = Template.bind({});
DefaultGridStackComponent.args = {};
