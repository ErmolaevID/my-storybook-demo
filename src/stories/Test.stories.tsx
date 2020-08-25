import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from "../components/Button/Button";

export default {
  title: "RCK/TopButton",
  component: Button,
} as Meta;

interface props {

}

const Template: Story<props> = () => <Button />

export const Standart = Template.bind({});