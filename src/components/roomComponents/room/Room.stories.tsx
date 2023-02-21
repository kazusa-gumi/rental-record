import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Room } from "./Room";

export default {
  component: Room,
  title: "roomComponents/room",
} as ComponentMeta<typeof Room>;

const Template: ComponentStory<typeof Room> = (args) => <Room {...args} />;

export const DefaultRoom = Template.bind({});
DefaultRoom.args = {
  children: "洋室",
};
