import Image from "next/image";
import logo from "../media/eia-logo.png";
import hero from "../media/hero.png";
import headlineBottom from "../media/headline-bottom.png";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="border-t-[6px] border-[#855247] w-full">
      <div className="container mx-auto">
        <div
          id="header"
          className="flex items-center pt-[6px] pb-[11px] px-4 sm:px-0">
          <div className="flex-grow">
            <Image
              src={logo}
              alt="EIA"
              className="max-w-[66px] sm:max-w-[100px]"
            />
          </div>
          <div className="flex flex-col items-end">
            <div className="font-bebas text-[18px]">
              JOIN THE JOURNEY THROUGH OUR{" "}
              <span className="text-[#855247]">NEXT FIRST</span>
            </div>
            <EnvelopeIcon className="h-6 w-6 text-black-500" />
          </div>
        </div>
        <div id="hero" className="relative h-[230px] sm:h-[300px] lg:h-[450px]">
          <Image
            src={hero}
            alt="School birds view"
            fill={true}
            className="object-cover"
          />
        </div>
        <div id="headline" className="py-[16px] px-4 sm:px-0">
          <h1 className="font-bebas text-[20px] text-[#D6B623]">
            Why the New School Project?
          </h1>
          <p className="text-[12px] leading-5">
            The Edmonton Islamic Academy (EIA) serves under 1800 students with
            an additional <b>1000 on its waiting list</b>. This reflects the
            rapid growth of the Muslim community in our city currently at
            100,000 people. To meet this pressing demand, the New School Project
            aims to provide essential services and nurture the emergence of
            courageous, faith-driven leaders. Your support is not just about
            constructing a school; it&apos;s an investment in shaping a future
            where our children and families thrive in an environment aligned
            with our Islamic values. Join us on this transformative journey!
          </p>
        </div>
        <div
          id="headline-bottom"
          className="relative h-[150px] sm:h-[250px] lg:h-[350px]">
          <Image
            src={headlineBottom}
            alt="Front school"
            fill={true}
            className="object-cover"
          />
        </div>
      </div>
    </main>
  );
}
