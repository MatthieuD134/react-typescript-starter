import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  return <>{children}</>;
};

export default Carousel;
