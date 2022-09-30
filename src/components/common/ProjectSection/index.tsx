import { PROJECT_LIST } from '../../../constants/projects';
import React, { useState } from 'react';
import SquareImageCard from '../Card/SquareImageCard';
import Carousel from '../Carousel/Carousel';
import styles from './index.module.scss';
import { VscGlobe } from 'react-icons/vsc';

const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(PROJECT_LIST[0]);

  return (
    <section className={styles.projectSection}>
      <div>
        <Carousel
          listOfchildren={PROJECT_LIST.map((project) => (
            <SquareImageCard
              key={project.name}
              image={project.image}
              imageAlt={`illustration for the ${project.name} project`}
              tiltHoverEffect
            />
          ))}
          onActiveItemChanged={(index) => setActiveProject(PROJECT_LIST[index])}
        />
      </div>

      <div className={styles.infoSection}>
        <div>
          <h2>{activeProject.name}</h2>
          <a className={styles.openLink} href={activeProject.link} target='blank'>
            <VscGlobe />
          </a>
          <span>{activeProject.role}</span>
          <p>{activeProject.decription}</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
