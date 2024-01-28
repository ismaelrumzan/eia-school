import { homeCarousel } from "@/lib/gallery";
import { Carousel } from "flowbite-react";
import { CarouselItem } from "@/components/ui/carousel-item";

export function HomeCarousel(): JSX.Element {
  return (
    <Carousel slideInterval={3000} pauseOnHover>
      {homeCarousel.map((item) => (
        <CarouselItem key={item.text} src={item.src} text={item.text} />
      ))}
    </Carousel>
  );
}
