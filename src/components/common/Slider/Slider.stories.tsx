import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Slider from './Slider';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

export default {
  title: 'Components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <div className={THEMES.LIGHT} style={{ height: '80vh', overflow: 'hidden' }}>
    <Slider {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Slider Title',
  children: <div>hello world</div>,
};
