import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';

interface CarouselProps {
  listOfchildren: React.ReactNode[];
  carouselStyle?: string;
  sliderStyle?: string;
  itemStyle?: string;
  itemActiveStyle?: string;
  itemInactiveStyle?: string;
  onActiveItemChanged?: (activeItem: number) => void;
  hideProgessionBar?: boolean;
  automaticSwipe?: boolean;
}

const Carousel = ({
  listOfchildren,
  carouselStyle = styles.carousel,
  sliderStyle = styles.slider,
  itemStyle = styles.item,
  itemActiveStyle = styles.active,
  itemInactiveStyle = styles.inactive,
  onActiveItemChanged,
  hideProgessionBar = false,
  automaticSwipe = true,
}: CarouselProps) => {
  const [activeItem, setActiveItem] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const [everTouched, setEverTouched] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    !everTouched && setEverTouched(true);
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      activeItem + 1 < listOfchildren.length && setActiveItem(activeItem + 1);
    } else if (isRightSwipe) {
      activeItem > 0 && setActiveItem(activeItem - 1);
    }
    setTouchEnd(null);
    setTouchStart(null);
  };

  // trigger when activeItem is changed
  useEffect(() => {
    onActiveItemChanged && onActiveItemChanged(activeItem);
  }, [activeItem]);

  // handle the auto-swiping
  useEffect(() => {
    if (automaticSwipe && !everTouched) {
      const timer = setTimeout(
        () => setActiveItem(activeItem + 1 < listOfchildren.length ? activeItem + 1 : 0),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [everTouched, activeItem]);

  return (
    <div className={styles.container}>
      <div className={carouselStyle} ref={ref}>
        <div
          className={sliderStyle}
          style={
            touchStart && touchEnd
              ? {
                  transition: 'none',
                  translate: `calc((${
                    ref.current && ref.current.clientWidth
                  }px) * -${activeItem} + ${touchEnd}px - ${touchStart}px)`,
                }
              : { translate: `calc(${ref.current && ref.current.clientWidth}px * -${activeItem})` }
          }
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {listOfchildren.map((child, index) => (
            <div
              className={`${itemStyle} ${
                activeItem === index ? itemActiveStyle : itemInactiveStyle
              }`}
              key={index}
              onFocus={() => {
                setActiveItem(index);
                setEverTouched(true);
              }}
            >
              {child}
            </div>
          ))}
        </div>
        {!hideProgessionBar && (
          <span className={styles.progressBarContainer}>
            <span className={styles.progressBar}>
              {listOfchildren.map((item, index) => (
                <div
                  key={index}
                  className={`${styles.progressItem} ${
                    activeItem === index ? styles.progressItemActive : styles.progressItemInactive
                  }`}
                  onClick={() => setActiveItem(index)}
                />
              ))}
            </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Carousel;
