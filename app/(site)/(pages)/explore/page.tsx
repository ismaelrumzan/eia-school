import { Flowbite } from "flowbite-react";
import { Carousel } from "flowbite-react";
import { H1 } from "@/components/ui/typography/h1";
import { CarouselItem } from "@/components/ui/carousel-item";
import { H2 } from "@/components/ui/typography/h2";
import { eiaTheme } from "@/components/ui/flowbite/theme";
import { CarouselVideo } from "@/components/ui/carousel-video";
import { interiorCarousel, exteriorCarousel } from "@/lib/gallery";

export default function Page() {
  return (
    <>
      <H1>Explore the Campus</H1>
      <H2 className="py-2">Video walkthroughs</H2>
      <Flowbite theme={{ theme: eiaTheme }}>
        <Carousel slide={false} indicators={false}>
          <CarouselVideo id="mzVjNwXDnjs" text="Prayer Hall with Mihrab" />
          <CarouselVideo id="OohLteGagC0" text="Prayer Hall to Small Gym" />
          <CarouselVideo id="nax06ECZk7c" text="School Commons" />
          <CarouselVideo id="8vdJMcTk1Bg" text="Complete Walkthrough" />
        </Carousel>
      </Flowbite>
      <H2 className="py-3">Interior and Classrooms</H2>
      <div className="h-[270px] sm:h-[350px]">
        <Carousel slideInterval={3000} pauseOnHover>
          {interiorCarousel.map((item) => (
            <CarouselItem
              key={item.text}
              src={item.src}
              text={item.text}
              showText
            />
          ))}
        </Carousel>
      </div>
      <H2 className="py-3">Exterior and Playgrounds</H2>
      <div className="h-[270px] sm:h-[350px]">
        <Carousel slideInterval={3000} pauseOnHover>
          {exteriorCarousel.map((item) => (
            <CarouselItem
              key={item.text}
              src={item.src}
              text={item.text}
              showText
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}