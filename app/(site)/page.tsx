import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import { H1 } from "@/components/ui/typography/h1";
import { H2_highlight } from "@/components/ui/typography/h2-highlight";
import { H2 } from "@/components/ui/typography/h2";
import benefit01 from "@/media/benefit-01.png";
import benefit02 from "@/media/benefit-02.png";
import benefit03 from "@/media/benefit-03.png";
import term01 from "@/media/terms-01.png";
import term02 from "@/media/terms-02.png";
import term03 from "@/media/terms-03.png";
import { Quote, ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { AboutItem } from "@/components/ui/about-item";

export default function Page() {
  return (
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={1500} pauseOnHover>
          <div
            id="hero-01"
            className="relative h-[200px] sm:h-[250px] lg:h-[350px]">
            <Image
              src="/gallery/exterior-01.jpg"
              alt="School birds view"
              fill={true}
              className="object-cover"
            />
          </div>
          <div
            id="hero-02"
            className="relative h-[200px] sm:h-[250px] lg:h-[350px]">
            <Image
              src="/gallery/exterior-02.png"
              alt="School birds view"
              fill={true}
              className="object-cover"
            />
          </div>
          <div
            id="hero-03"
            className="relative h-[200px] sm:h-[250px] lg:h-[350px]">
            <Image
              src="/gallery/interior-01.png"
              alt="School birds view"
              fill={true}
              className="object-cover"
            />
          </div>
          <div
            id="hero-03"
            className="relative h-[200px] sm:h-[250px] lg:h-[350px]">
            <Image
              src="/gallery/exterior-03.png"
              alt="School birds view"
              fill={true}
              className="object-cover"
            />
          </div>
          <div
            id="hero-03"
            className="relative h-[200px] sm:h-[250px] lg:h-[350px]">
            <Image
              src="/gallery/interior-02.png"
              alt="School birds view"
              fill={true}
              className="object-cover"
            />
          </div>
        </Carousel>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <div className="text-[13px]">Support the</div>
        <H2_highlight>Edmonton Islamic Academy Elementary CAMPUS</H2_highlight>
        <div className="text-[14px]">
          Continue down the tradition of Firsts – Embark on a journey to our
          Next First
        </div>
        <CTAButton href="">Explore</CTAButton>
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
        <CTAButton href="">Help us reach our goal</CTAButton>
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
