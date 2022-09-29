import useOnClickOutside from '../../../hooks/useOnClickOutside';
import React, { useRef, useState } from 'react';
import styles from './Slider.module.scss';

export interface SliderProps {
  title: string;
  children: React.ReactNode;
}

const Slider = ({ title, children }: SliderProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => open && setOpen(false));

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) =>
    setTouchEnd(e.targetTouches[0].clientY);

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipeUp = distance > minSwipeDistance;
    const isSwipeDown = distance < -minSwipeDistance;
    if (isSwipeUp) {
      !open && setOpen(true);
    } else if (isSwipeDown) {
      open && setOpen(false);
    }
    setTouchEnd(null);
    setTouchStart(null);
  };

  return (
    <>
      {open && <div className={styles.overlay} />}
      <div
        className={`${styles.slider} ${open && styles.open}`}
        ref={ref}
        style={
          touchStart && touchEnd
            ? open
              ? {
                  transition: 'none',
                  translate: `0 calc(10px + ${touchEnd}px - ${touchStart}px)`,
                }
              : {
                  transition: 'none',
                  translate: `0 calc(100% - 3em + ${touchEnd}px - ${touchStart}px)`,
                }
            : open
            ? { translate: '0 10px' }
            : { translate: '0 calc(100% - 3em)' }
        }
      >
        <div
          className={styles.barContainer}
          onClick={() => setOpen(!open)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <span className={styles.barToOpen} />
        </div>
        <div className={styles.container}>
          <div
            className={styles.titleDiv}
            tabIndex={0}
            onClick={() => setOpen(!open)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onFocus={() => !open && setOpen(!open)}
          >
            {title}
          </div>

          <button className={styles.closeBtn} onClick={() => setOpen(false)}>
            close
          </button>

          <div className={styles.childrenDiv}>{children}</div>
          <svg width='100%' viewBox='0 0 396 103'>
            <path
              d='M0 19.009C0 19.009 24 -0.710564 84.5 0.0197924C145 0.750148 186.5 28.8689 233.5 28.8689C280.5 28.8689 282 10.9751 328.5 10.9751C375 10.9751 396 23.7564 396 23.7564V103H0V19.009Z'
              fill='#C4C4C4'
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Slider;
