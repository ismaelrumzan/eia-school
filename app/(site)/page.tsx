import Image from "next/image";
import { Carousel } from "flowbite-react";
import { H1, H1_light } from "@/components/ui/typography/h1";
import { H2_highlight } from "@/components/ui/typography/h2-highlight";
import { H2, H2_light } from "@/components/ui/typography/h2";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { AboutItem } from "@/components/ui/about-item";
import { CarouselItem } from "@/components/ui/carousel-item";
import { DonationItem } from "@/components/ui/donation-item";
import { homeCarousel } from "@/lib/gallery";

export default function Page() {
  return (
    <>
      <div className="h-[235px] sm:h-[350px] px-2">
        <Carousel slideInterval={3000} pauseOnHover>
          {homeCarousel.map((item) => (
            <CarouselItem key={item.text} src={item.src} text={item.text} />
          ))}
        </Carousel>
      </div>
      <div className="flex flex-col px-3 py-2">
        <div className="text-[13px]">Support the</div>
        <H2_highlight className="mb-2">
          Edmonton Islamic Academy Elementary CAMPUS
        </H2_highlight>
        <div className="text-[14px] mb-1">
          Continue down the tradition of Firsts – Embark on a journey to our
          Next First
        </div>
        <CTAButton href="/explore">Explore</CTAButton>
      </div>
      <div id="about" className="py-4 mb-3 px-2 flex flex-col">
        <H1 className="text-center">About the project</H1>
        <H2 className="text-center">Opening 2026 inshaAllah</H2>
        <div className="grid grid-cols-4 gap-4 my-4">
          <AboutItem src="/about-01.png" text="1700+ students" />
          <AboutItem src="/about-02.png" text="70,000+ square feet" />
          <AboutItem src="/about-03.png" text="76 classrooms" />
          <AboutItem src="/about-04.png" text="2 prayer halls" />
          <AboutItem src="/about-05.png" text="2 gyms" />
          <AboutItem src="/about-06.png" text="Cafeteria" />
          <AboutItem src="/about-07.png" text="5 Learning Centers" />
          <AboutItem src="/about-08.png" text="Playground & field" />
        </div>
        <CTAButton href="/donate">Help us reach our goal</CTAButton>
      </div>
      <div id="donation" className="py-4 px-2 flex flex-col bg-[#28AE6F]">
        <H1 className="text-center">Join the journey through OUR Next First</H1>
        <H2 className="text-center">Three ways to contribute</H2>
        <div className="h-[300px]">
          <Carousel slide={false} indicators={false}>
            <DonationItem
              src="/donation-01.png"
              title="Qard Hasan"
              description="Give a good loan through Qard Hasan. Interest-free and rooted in charity."
              button={{ text: "Learn more", href: "/contribute/qard-hasan" }}
            />
            <DonationItem
              src="/donation-02.png"
              title="Donation Programs"
              description="Give a good loan through Qard Hasan. Interest-free and rooted in charity."
              button={{
                text: "Learn more",
                href: "/contribute/donation-programs",
              }}
            />
            <DonationItem
              src="/donation-03.png"
              title="Donations"
              description="Give a good loan through Qard Hasan. Interest-free and rooted in charity."
              button={{
                text: "Learn more",
                href: "/contribute#gift-giving",
              }}
            />
          </Carousel>
        </div>
      </div>
      <div id="donation" className="flex flex-col bg-[#094931]">
        <div className="relative h-[225px]">
          <Image
            src="/vision.png"
            alt="Hall"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col px-3 gap-1 pb-5">
          <H1_light className="text-center">Entrance to Paradise</H1_light>
          <H2_light className="text-center">
            Design philosophy and vision
          </H2_light>
          <CTAButton href="/vision">Explore</CTAButton>
        </div>
      </div>
    </>
  );
}
