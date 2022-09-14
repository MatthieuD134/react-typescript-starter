import React, { useState } from 'react';
import styles from './SquareImageCard.module.scss';

interface SquareImageCardProps {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disableTabNav?: boolean;
  tiltHoverEffect?: boolean;
}

const SquareImageCard = ({
  children,
  image,
  imageAlt,
  onClick,
  disableTabNav = false,
  tiltHoverEffect = false,
}: SquareImageCardProps) => {
  const [imgLoaded, setImageLoaded] = useState(false);
  return (
    <div className={styles.cardContainer}>
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}

      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}

      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}

      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}

      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      {tiltHoverEffect && <div className={styles.tiltBox} />}
      <div className={`${styles.card}`} tabIndex={disableTabNav ? -1 : 0} onClick={onClick}>
        <img
          className={`${styles.cardImg} ${imgLoaded ? styles.imgLoaded : styles.imgLoading}`}
          src={image}
          alt={imageAlt}
          onLoad={() => setImageLoaded(true)}
        />
        {children && <span className={styles.cardSpan}>{children}</span>}
      </div>
    </div>
  );
};

export default SquareImageCard;
