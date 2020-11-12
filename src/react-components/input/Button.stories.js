import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Column } from "../layout/Column";
import { Button, presets } from "./Button";

export default {
  title: "Button",
  decorators: [withDesign]
};

export const All = () => (
  <Column padding>
    {presets.map(preset => (
      <Button key={preset} preset={preset}>
        {preset.replace(/^\w/, c => c.toUpperCase())}
      </Button>
    ))}
    <Button disabled>Disabled</Button>
    <Button>Really Really Long Button Name</Button>
  </Column>
);

All.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Xag5qaEgYs3KzXvoxx5m8y/Hubs-Redesign?node-id=70%3A2186"
  }
};
