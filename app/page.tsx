import { Button } from "@/components/ui/button";
import { SubmitForm } from "@/components/ui/submit-form";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import logo from "../media/eia-logo.png";
import hero from "../media/hero.png";
import headlineBottom from "../media/headline-bottom.png";
import { Quote, ArrowRight, Mail } from "lucide-react";

export default function Page() {
  return (
    <Dialog>
      <main className="border-t-[6px] border-[#855247] w-full">
        <div className="container mx-auto max-w-[1024px]">
          <div
            id="header"
            className="flex items-center pt-[6px] pb-[11px] px-4 lg:px-0">
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
              <Link href="mailto:nsp@islamicacademy.ca" target="blank">
                <Mail className="h-6 w-6 text-black-500" />
              </Link>
            </div>
          </div>
          <div
            id="hero"
            className="relative h-[200px] sm:h-[250px] lg:h-[350px]">
            <Image
              src={hero}
              alt="School birds view"
              fill={true}
              className="object-cover"
            />
          </div>
          <div id="headline" className="py-[16px] px-4 lg:px-0">
            <h1 className="font-bebas text-[20px] text-[#D6B623]">
              Why the New School Project?
            </h1>
            <p className="text-[12px] leading-5">
              The Edmonton Islamic Academy (EIA) serves under 1800 students with
              an additional <b>1000 on its waiting list</b>. This reflects the
              rapid growth of the Muslim community in our city currently at
              100,000 people. To meet this pressing demand, the New School
              Project aims to provide essential services and nurture the
              emergence of courageous, faith-driven leaders. Your support is not
              just about constructing a school; it&apos;s an investment in
              shaping a future where our children and families thrive in an
              environment aligned with our Islamic values. Join us on this
              transformative journey!
            </p>
          </div>
          <div
            id="headline-bottom"
            className="relative h-[150px] sm:h-[200px] lg:h-[300px]">
            <Image
              src={headlineBottom}
              alt="Front school"
              fill={true}
              className="object-cover"
            />
          </div>
          <div id="contribute" className="py-[16px] px-4 lg:px-0">
            <h2 className="font-bebas text-[20px] text-center leading-4">
              CONTRIBUTE THROUGH
            </h2>
            <h2 className="font-bebas text-[24px] text-center text-[#D6B623]">
              QARD AL-HASSAN
            </h2>
            <h3 className="text-[12px] text-center uppercase leading-4 font-semibold">
              THE GOOD LOAN
            </h3>
            <p className="text-[12px] leading-5 pt-[7px]">
              Qard Al-Hasan is a unique Islamic financial term that differs from
              a “traditional” loan; it&apos;s a pious, charitable act deeply
              rooted in the Islamic faith. By giving money via a “good loan”
              (interest-free), you empower our shared community and protect our
              children from non-Islamic influences. This is a legal contract
              between the lender and borrower, sanctioned by Islamic
              best-practices.
            </p>
            <div className="flex pt-[16px] pb-[5px]">
              <div className="self-start">
                <Quote size={20} className="text-[#855247] rotate-180" />
              </div>
              <p className="text-[14px] text-center text-[#855247]">
                Who is it that will lend to Allah a good loan which Allah will
                multiply many times over for them, and they will have an
                honorable reward
              </p>
              <div className="self-end">
                <Quote size={20} className="text-[#855247]" />
              </div>
            </div>
            <p className="text-center text-[12px] text-[#31c8ad]">
              Quran 57:11
            </p>
            <DialogTrigger asChild>
              <Button className="font-bebas text-[22px] uppercase w-full bg-[#D6B623] my-[16px]">
                Sign up <ArrowRight className="ml-1 h-5 w-5" />
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </main>
      <DialogContent className="sm:max-w-[425px] bg-slate-50">
        <SubmitForm />
      </DialogContent>
    </Dialog>
  );
}
