import { Flowbite } from "flowbite-react";
import Link from "next/link";
import { Carousel } from "flowbite-react";
import { Video, Image } from "lucide-react";
import { H1 } from "@/components/ui/typography/h1";
import { CarouselItem } from "@/components/ui/carousel-item";
import { H2 } from "@/components/ui/typography/h2";
import { eiaTheme, eiaTheme2 } from "@/components/ui/flowbite/theme";
import { CarouselVideo } from "@/components/ui/carousel-video";
import { interiorCarousel, exteriorCarousel } from "@/lib/gallery";

export default function Page() {
  return (
    <>
      <H1>Gallery</H1>
      <div class="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <Link href="#walkthroughs">
            <Video className="text-[#B29F5D] hover:text-[#094931]" size={75} />
          </Link>
          <p className="text-sm sm:text-base">Walkthroughs</p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="#interior">
            <Image className="text-[#B29F5D] hover:text-[#094931]" size={75} />
          </Link>
          <p className="text-sm sm:text-base">Interior</p>
        </div>
        <div className="flex flex-col items-center">
          <Link href="#exterior">
            <Image className="text-[#B29F5D] hover:text-[#094931]" size={75} />
          </Link>
          <p className="text-sm sm:text-base">Exterior</p>
        </div>
      </div>
      <div id="walkthroughs" className="mt-3">
        <H2 className="py-2">Video walkthroughs</H2>
        <Flowbite theme={{ theme: eiaTheme }}>
          <Carousel slide={false} indicators={false}>
            <CarouselVideo id="mzVjNwXDnjs" text="Prayer Hall with Mihrab" />
            <CarouselVideo id="OohLteGagC0" text="Prayer Hall to Small Gym" />
            <CarouselVideo id="nax06ECZk7c" text="School Commons" />
            <CarouselVideo id="8vdJMcTk1Bg" text="Complete Walkthrough" />
          </Carousel>
        </Flowbite>
      </div>
      <div id="interior" className="mt-3">
        <H2 className="py-3">Interior & Classrooms</H2>
        <div className="h-[270px] sm:h-[400px]">
          <Flowbite theme={{ theme: eiaTheme2 }}>
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
          </Flowbite>
        </div>
      </div>
      <div id="exterior" className="mt-3">
        <H2 className="py-3">Exterior & Playgrounds</H2>
        <div className="h-[270px] sm:h-[400px] mb-5">
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
      </div>
    </>
  );
}