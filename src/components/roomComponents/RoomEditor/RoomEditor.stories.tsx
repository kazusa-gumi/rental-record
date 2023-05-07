import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { RoomEditor } from "./RoomEditor";

export default {
  component: RoomEditor,
  title: "RoomEditor",
} as ComponentMeta<typeof RoomEditor>;

const Template: ComponentStory<typeof RoomEditor> = () => <RoomEditor />;

export const DefaultRoomEditor = Template.bind({});
DefaultRoomEditor.args = {};
