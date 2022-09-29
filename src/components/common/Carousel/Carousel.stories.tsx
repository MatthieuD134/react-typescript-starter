import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Carousel from '../Carousel/Carousel';
import SquareImageCard from '../Card/SquareImageCard';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <div className={THEMES.LIGHT} style={{ height: '80vh', overflow: 'hidden' }}>
    <Carousel {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  listOfchildren: [
    <SquareImageCard
      key={0}
      image='https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
      imageAlt='img 1'
    />,
    <SquareImageCard
      key={1}
      image='https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
      imageAlt='img 2'
    />,
    <SquareImageCard
      key={2}
      image='https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg'
      imageAlt='img 3'
    />,
  ],
};
