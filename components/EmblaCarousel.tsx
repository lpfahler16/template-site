import React, { ReactElement, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface EmblaCarouselProps {
  slides: JSX.Element[];
}

export const EmblaCarousel: React.FC<EmblaCarouselProps> = ({
  slides,
}): JSX.Element => {
  const autoplayOptions = {};

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const renderedSlides = slides.map(
    (slide: ReactElement, index: number): ReactElement => (
      <div key={index} className="embla__slide max-w-fit">
        {slide}
      </div>
    )
  );

  useEffect(() => {
    console.log(slides);
  });
  return (
    <div className="embla flex border rounded-xl bg-darkest-gray border-lightest-gray px-4">
      <button className="embla__prev hidden md:block" onClick={scrollPrev}>
        <FaChevronLeft className="text-lightest-gray text-4xl" />
      </button>
      <div className="embla__viewport flex-grow overflow-hidden" ref={emblaRef}>
        <div className="embla__container">{renderedSlides}</div>
      </div>
      <button className="embla__next hidden md:block" onClick={scrollNext}>
        <FaChevronRight className="text-lightest-gray text-4xl" />
      </button>
    </div>
  );
};

export default EmblaCarousel;
