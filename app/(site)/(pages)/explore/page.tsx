import Image from "next/image";
import { Carousel } from "flowbite-react";
import { H1 } from "@/components/ui/typography/h1";
import { H2_highlight } from "@/components/ui/typography/h2-highlight";
import { H2 } from "@/components/ui/typography/h2";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { AboutItem } from "@/components/ui/about-item";
import { CarouselItem } from "@/components/ui/carousel-item";
import { CarouselVideo } from "@/components/ui/carousel-video";

export default function Page() {
  return (
    <>
      <H1>Explore the Campus</H1>
      <H2 className="py-2">Video walkthroughs</H2>
      <Carousel slideInterval={3000} pauseOnHover>
        <CarouselVideo id="mzVjNwXDnjs" text="Prayer Hall" />
        <CarouselVideo id="OohLteGagC0" text="Prayer Hall" />
        <CarouselVideo id="nax06ECZk7c" text="School Commons" />
      </Carousel>
      <H2 className="py-3">Interior and Classrooms</H2>
      <H2 className="py-3">Exterior and Playgrounds</H2>
    </>
  );
}
