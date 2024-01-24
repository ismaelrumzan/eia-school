import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { H1 } from "@/components/ui/typography/h1";
import { H2_highlight } from "@/components/ui/typography/h2-highlight";
import { H2 } from "@/components/ui/typography/h2";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { AboutItem } from "@/components/ui/about-item";
import { CarouselItem } from "@/components/ui/carousel-item";

export default function Page() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={3000} pauseOnHover>
          <CarouselItem
            src="/gallery/home/EXTERIOR - BIRDS EYE VIEW.jpg"
            text="Bird's eye view"
          />
          <CarouselItem
            src="/gallery/home/EXTERIOR - FRONT ENTRANCE APPROACH.jpeg"
            text="Front entrance approach"
          />
          <CarouselItem
            src="/gallery/home/EXTERIOR - FRONT ENTRANCE.jpeg"
            text=""
          />
          <CarouselItem
            src="/gallery/home/EXTERIOR - NORTH PLAYGROUND BASKETBALL.jpeg"
            text="North playground"
          />
          <CarouselItem
            src="/gallery/home/EXTERIOR - PRAYER HALL GARDEN.jpeg"
            text="Prayer hall garden"
          />
          <CarouselItem
            src="/gallery/home/EXTERIOR - SOCCER FIELDS - BIRDSEYE.jpeg"
            text="Soccer fields"
          />
          <CarouselItem
            src="/gallery/home/INTERIOR - CLASSROOM B.jpeg"
            text="Classroom"
          />
          <CarouselItem
            src="/gallery/home/INTERIOR - MAIN GYM TO PRAYER HAL.jpeg"
            text="Main gym to prayer hall"
          />
          <CarouselItem
            src="/gallery/home/INTERIOR - NORTH LEARNING COMMONS D.jpeg"
            text="North learning commons"
          />
          <CarouselItem
            src="/gallery/home/INTERIOR - PRAYER HALL MIHRAB.jpeg"
            text="Prayer hall Mihrab"
          />
          <CarouselItem
            src="/gallery/home/INTERIOR - PRAYER HALL.jpeg"
            text="Prayer hall"
          />
          <CarouselItem
            src="/gallery/home/INTERIOR - SCHOOL COMMONS.jpeg"
            text="School Commons"
          />
          <CarouselItem
            src="/gallery/home/INTERIOR - SOCIAL STAIR.jpeg"
            text="Social Stair"
          />
        </Carousel>
      </div>
      <div className="flex flex-col gap-2 px-3 py-2">
        <div className="text-[13px]">Support the</div>
        <H2_highlight>Edmonton Islamic Academy Elementary CAMPUS</H2_highlight>
        <div className="text-[14px]">
          Continue down the tradition of Firsts – Embark on a journey to our
          Next First
        </div>
        <CTAButton href="/explore">Explore</CTAButton>
      </div>
      <div id="about" className="py-3 mb-3 px-2 flex flex-col">
        <H1 className="text-center">About the project</H1>
        <H2 className="text-center">Opening 2026 inshaAllah</H2>
        <div className="grid grid-cols-4 gap-4 my-4">
          <AboutItem src="/about-01.png" text="1600 students" />
          <AboutItem src="/about-02.png" text="10000 square feet" />
          <AboutItem src="/about-03.png" text="73 classrooms" />
          <AboutItem src="/about-04.png" text="2 prayer halls" />
          <AboutItem src="/about-05.png" text="2 gyms" />
          <AboutItem src="/about-06.png" text="Cafeteria" />
          <AboutItem src="/about-07.png" text="5 Learning Centers" />
          <AboutItem src="/about-08.png" text="Playground & field" />
        </div>
        <CTAButton href="/explore">Help us reach our goal</CTAButton>
      </div>
      <div
        id="footer-img"
        className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
        <Image
          src="/footer.png"
          alt="Hall"
          fill={true}
          className="object-cover"
        />
      </div>
    </>
  );
}
