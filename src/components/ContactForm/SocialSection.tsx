import { listOfSocials } from '../../constants/socials';
import React from 'react';
import styles from './SocialSection.module.scss';

const SocialSection = () => {
  return (
    <div>
      <span className={styles.socialTitle}>Or find me on my socials</span>
      <div className={styles.socials}>
        {listOfSocials.map((social) => (
          <a key={social.name} tabIndex={0} href={social.link} target='blank'>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialSection;
