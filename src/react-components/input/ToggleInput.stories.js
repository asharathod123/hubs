import React from "react";
import { Column } from "../layout/Column";
import { ToggleInput } from "./ToggleInput";

export default {
  title: "ToggleInput",
  argTypes: { onChange: { action: "onChange" } }
};

export const All = args => (
  <Column padding>
    <ToggleInput {...args} />
    <ToggleInput label="Toggle Input" {...args} />
    <ToggleInput label="Toggle Input" value={false} {...args} />
    <ToggleInput label="Toggle Input" value={true} {...args} />
    <ToggleInput label="Toggle Input" value={false} disabled {...args} />
    <ToggleInput label="Toggle Input" value={true} disabled {...args} />
    <ToggleInput label="Toggle Input" description="With description" {...args} />
  </Column>
);
