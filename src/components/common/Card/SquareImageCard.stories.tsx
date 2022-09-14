import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SquareImageCard from './SquareImageCard';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

export default {
  title: 'Components/SquareImageCard',
  component: SquareImageCard,
} as ComponentMeta<typeof SquareImageCard>;

const Template: ComponentStory<typeof SquareImageCard> = (args) => (
  <div className={THEMES.LIGHT} style={{ display: 'flex', justifyContent: 'center' }}>
    <SquareImageCard {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      <span>Card Title</span>
      <p>Card description here...</p>
    </div>
  ),
  image:
    'https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
  imageAlt: 'just an image',
};

export const NoChildren = Template.bind({});
NoChildren.args = {
  image:
    'https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
  imageAlt: 'just an image',
};

export const LongChildren = Template.bind({});
LongChildren.args = {
  children: (
    <div>
      <span>This is a card with a long long long title</span>
      <p>
        some description here, qwoug qwiegqwekfq oifsdlkgn qpwigj wlkngfpqirgjsdkgl qrg qwoug
        qwiegqwekfq oifsdlkgn qpwigj wlkngfpqirgjsdkgl qrg qwoug qwiegqwekfq oifsdlkgn qpwigj
        wlkngfpqirgjsdkgl qrg qwoug qwiegqwekfq oifsdlkgn qpwigj wlkngfpqirgjsdkgl qrg qwoug
        qwiegqwekfq oifsdlkgn qpwigj wlkngfpqirgjsdkgl qrg qwoug qwiegqwekfq oifsdlkgn qpwigj
        wlkngfpqirgjsdkgl qrg
      </p>
    </div>
  ),
  image:
    'https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
  imageAlt: 'just an image',
};

export const TiltEffect = Template.bind({});
TiltEffect.args = {
  children: (
    <div>
      <span>Card Title</span>
      <p>Card description here...</p>
    </div>
  ),
  image:
    'https://static.remove.bg/remove-bg-web/37843dee2531e43723b012aa78be4b91cc211fef/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
  imageAlt: 'just an image',
  tiltHoverEffect: true,
};
