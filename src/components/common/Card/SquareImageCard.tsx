import React, { useState } from 'react';
import styles from './SquareImageCard.module.scss';

interface SquareImageCardProps {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  disableTabNav?: boolean;
}

const SquareImageCard = ({
  children,
  image,
  imageAlt,
  onClick,
  disableTabNav = false,
}: SquareImageCardProps) => {
  const [imgLoaded, setImageLoaded] = useState(false);
  return (
    <div className={`${styles.card}`} tabIndex={disableTabNav ? -1 : 0} onClick={onClick}>
      <img
        className={`${styles.cardImg} ${imgLoaded ? styles.imgLoaded : styles.imgLoading}`}
        src={image}
        alt={imageAlt}
        onLoad={() => setImageLoaded(true)}
      />
      {children && <span className={styles.cardSpan}>{children}</span>}
    </div>
  );
};

export default SquareImageCard;
