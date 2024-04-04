import Image from "next/image";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import { HelpCircle } from "lucide-react"
import { CarouselVideo } from "@/components/ui/carousel-video";
import { H1, H1_light } from "@/components/ui/typography/h1";
import { H2, H2_light } from "@/components/ui/typography/h2";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { AboutItem } from "@/components/ui/about-item";
import { DonationItem } from "@/components/ui/donation-item";
import { HomeCarousel } from "./home-carousel";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
        <div className="flex flex-col px-3 pt-2 justify-between">
          <div>
            <div className="text-[13px] sm:text-[15px]">Support the</div>
            <H1>Edmonton Islamic Academy Elementary CAMPUS</H1>
            <div className="text-[14px] sm:text-[16px] mb-1">
              Continue down the tradition of Firsts – Embark on a journey to our
              Next First
            </div>
          </div>
          <div>
            <div className="text-[14px] md:text-[16px] mb-1">
              3 Ways to Make a Difference
            </div>
            <ul className="text-[14px] md:text-[16px] ml-6 list-disc [&>li]:mt-2">
              <li>Qard al Hasan</li>
              <li>Donate</li>
              <li>Become an Ambassador</li>
            </ul>
          </div>
          <div className="mt-3">
            <CTAButton href="/ambassador">Sign Up Today!</CTAButton>
          </div>
        </div>
        <div className="p-2 flex flex-col justify-center">
          <CarouselVideo id="lbF6Xl5BhJU" text="A school built like no other" showCaption={false} params="controls=0" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center items-center gap-2">
          <HelpCircle className="text-[#C6BB79]" />
          <H2 className="text-center">
            Check out our <Link href="/faq" className="underline hover:no-underline">FAQs</Link>
          </H2>
        </div>
        <div className="text-center">Explore the most frequently asked questions from our community. </div>
      </div>
      <div
        id="about"
        className="py-4 px-2 flex flex-col border-t border-[#094931] items-center">
        <H1 className="text-center">About the project</H1>
        <div className="text-center max-w-4xl py-2">Our school combines premier academic standards with a foundation in Islamic values. Designed exclusively for elementary-aged children, we&apos;re dedicated to meeting the growing needs of our community.</div>
        <div className="text-center italic font-semibold">Opening 2026 inshaAllah, with your support</div>
        <div className="grid grid-cols-4 gap-4 lg:gap-x-20 my-4 max-w-4xl">
          <AboutItem src="/about-01.png" text="1700+ students" />
          <AboutItem src="/about-02.png" text="70,000+ square feet" />
          <AboutItem src="/about-03.png" text="76 classrooms" />
          <AboutItem src="/about-04.png" text="2 prayer halls" />
          <AboutItem src="/about-05.png" text="2 gyms" />
          <AboutItem src="/about-06.png" text="Cafeteria" />
          <AboutItem src="/about-07.png" text="5 Learning Centers" />
          <AboutItem src="/about-08.png" text="Playground & field" />
        </div>
      </div>
      <div className="flex justify-center mb-3 px-3 sm:px-0">
        <CTAButton href="/about">Watch video</CTAButton>
      </div>
      <div className="h-[235px] sm:h-[350px] px-2">
        <HomeCarousel />
      </div>
      <div className="flex justify-center px-3 sm:px-0 py-3">
        <CTAButton href="/gallery">View gallery</CTAButton>
      </div>
      <div id="donation" className="py-4 px-2 flex flex-col bg-[#28AE6F]">
        <H1 className="text-center">Join the journey through OUR Next First</H1>
        <H2 className="text-center">Three ways to contribute</H2>
        <div className="h-[300px]">
          <Carousel slide={false} indicators={false}>
            <DonationItem
              src="/donation-02.png"
              title="Donation Programs"
              description="Spread your donation and choose your terms."
              button={{
                text: "Learn more",
                href: "/contribute/donation-programs",
              }}
            />
            <DonationItem
              src="/donation-01.png"
              title="Qard Hasan"
              description="Give a good loan through Qard Hasan. Interest-free and rooted in charity."
              button={{ text: "Learn more", href: "/contribute/qard-hasan" }}
            />
            <DonationItem
              src="/donation-03.png"
              title="Ambassador"
              description="We need ambassadors to reach out to community members."
              button={{ text: "Learn more", href: "/ambassador" }}
            />
          </Carousel>
        </div>
      </div>
      <div id="vision" className="flex flex-col bg-[#094931]">
        <div className="relative h-[225px] sm:h-[400px]">
          <Image
            src="/vision.png"
            alt="Hall"
            fill={true}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col px-3 gap-1">
          <H1_light className="text-center">Entrance to Paradise</H1_light>
          <H2_light className="text-center">
            Design philosophy and vision
          </H2_light>
        </div>
        <div className="flex justify-center px-3 sm:px-0 py-2 mb-3">
          <CTAButton href="/design">Learn more</CTAButton>
        </div>
      </div>
    </>
  );
}