import React from 'react';
import { RiLinkedinFill, RiTwitterFill, RiGithubFill } from 'react-icons/ri';
import { FaTelegramPlane } from 'react-icons/fa';

export const socials = {
  linkedIn: {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/matthieudaulhiac/',
    icon: <RiLinkedinFill />,
  },
  telegram: {
    name: 'Telegram',
    link: '',
    icon: <FaTelegramPlane />,
  },
  twitter: {
    name: 'Twitter',
    link: 'https://twitter.com/matthieu_daul',
    icon: <RiTwitterFill />,
  },
  github: {
    name: 'Github',
    link: 'https://github.com/MatthieuD134',
    icon: <RiGithubFill />,
  },
};

export const listOfSocials = Object.values(socials);
