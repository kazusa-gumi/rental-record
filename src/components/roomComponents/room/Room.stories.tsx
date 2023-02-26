import { roomMessages } from "@/src/lib/messages";
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

export const DefaultWashituRoom = Template.bind({});
DefaultWashituRoom.args = {
  children: "和室",
};

export const DefaultBathRoom = Template.bind({});
DefaultBathRoom.args = {
  children: "浴室",
};

export const DefaultRestRoom = Template.bind({});
DefaultRestRoom.args = {
  children: "トイレ",
};

export const DefaultFrontDoor = Template.bind({});
DefaultFrontDoor.args = {
  children: "玄関",
};

export const DefaultDiningRoom = Template.bind({});
DefaultDiningRoom.args = {
  children: "ダイニング",
};

export const DefaultkichinRoom = Template.bind({});
DefaultkichinRoom.args = {
  children: "キッチン",
};

export const DefaultBathHouse = Template.bind({});
DefaultBathHouse.args = {
  children: "脱衣所",
};
