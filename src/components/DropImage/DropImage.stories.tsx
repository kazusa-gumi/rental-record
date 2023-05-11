import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { DropImage } from "./DropImage";

export default {
  component: DropImage,
  title: "DropImageStory",
} as ComponentMeta<typeof DropImage>;

const Template: ComponentStory<typeof DropImage> = () => <DropImage />;

export const DefaultDropImage = Template.bind({});
DefaultDropImage.args = {};
