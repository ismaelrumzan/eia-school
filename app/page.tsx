import { Button } from "@/components/ui/button";
import { SubmitForm } from "@/components/ui/submit-form";
import Link from "next/link";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import logo from "../media/eia-logo.png";
import hero from "../media/hero.png";
import headlineBottom from "../media/headline-bottom.png";
import qardTop from "../media/qard-top.png";
import benefit01 from "../media/benefit-01.png";
import benefit02 from "../media/benefit-02.png";
import benefit03 from "../media/benefit-03.png";
import term01 from "../media/terms-01.png";
import term02 from "../media/terms-02.png";
import term03 from "../media/terms-03.png";
import qardBottom from "../media/qard-bottom.png";
import footer from "../media/footer.png";
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
            <h1 className="font-bebas text-[20px] sm:text-[26px] text-[#D6B623]">
              Why the New School Project?
            </h1>
            <p className="text-[12px] sm:text-[14px] leading-5">
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
          <div id="contribute" className="py-[16px] sm:py-[22px] px-4 lg:px-0">
            <h2 className="font-bebas text-[20px] sm:text-[26px] text-center leading-4">
              CONTRIBUTE THROUGH
            </h2>
            <h2 className="font-bebas text-[24px] sm:text-[28px] text-center text-[#D6B623]">
              QARD AL-HASSAN
            </h2>
            <h3 className="text-[12px] sm:text-[15px] text-center uppercase leading-4 font-semibold">
              THE GOOD LOAN
            </h3>
            <p className="text-[12px]  sm:text-[14px] leading-5 pt-[7px]">
              Qard Al-Hasan is a unique Islamic financial term that differs from
              a “traditional” loan; it&apos;s a pious, charitable act deeply
              rooted in the Islamic faith. By giving money via a “good loan”
              (interest-free), you empower our shared community and protect our
              children from non-Islamic influences. This is a legal contract
              between the lender and borrower, sanctioned by Islamic
              best-practices.
            </p>
            <div className="flex justify-center full-w">
              <div>
                <div className="flex pt-[16px] pb-[5px]">
                  <div className="self-start">
                    <Quote size={20} className="text-[#855247] rotate-180" />
                  </div>
                  <p className="text-[14px] text-center sm:text-[18px] text-[#855247] px-[10px] max-w-[450px]">
                    Who is it that will lend to Allah a good loan which Allah
                    will multiply many times over for them, and they will have
                    an honorable reward
                  </p>
                  <div className="self-end">
                    <Quote size={20} className="text-[#855247]" />
                  </div>
                </div>
                <p className="text-center text-[12px] sm:text-[14px] text-[#31c8ad]">
                  Quran 57:11
                </p>
              </div>
            </div>
            <div className="full-w flex justify-center">
              <DialogTrigger asChild>
                <Button className="font-bebas text-[22px] uppercase w-full bg-[#D6B623] my-[16px] max-w-[350px]">
                  Sign up <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </DialogTrigger>
            </div>
          </div>
          <div
            id="qard-top"
            className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
            <Image
              src={qardTop}
              alt="Front school"
              fill={true}
              className="object-cover"
            />
          </div>
          <div id="benefits" className="py-[16px] px-4 lg:px-0">
            <h2 className="text-[13px] sm:text-[16px] font-semibold pb-[5px]">
              Key Benefits of Qard Al-Hasan:
            </h2>
            <div className="flex pb-[10px]">
              <div>
                <div className="relative w-[60px]">
                  <Image src={benefit01} alt="benefit 01" />
                </div>
              </div>
              <div className="text-[12px] sm:text-[14px] leading-5 ml-[10px]">
                <div>
                  <b>Spiritual Significance:</b>
                </div>
                The Holy Qur&apos;an emphasizes the concept of Qard Al-Hasan six
                times. It is an honored act of devotion and righteousness that
                promises participants abundant rewards, expiation of sins and
                forgiveness.
              </div>
            </div>
            <div className="flex pb-[10px]">
              <div>
                <div className="relative w-[60px]">
                  <Image src={benefit02} alt="benefit 02" />
                </div>
              </div>
              <div className="text-[12px] sm:text-[14px] leading-5 ml-[10px]">
                <div>
                  <b>Reviving a Sunnah:</b>
                </div>
                Be a part of reviving Prophet Muhammad&apos;s (PBUH) practice by
                giving a loan, fostering community, and supporting Muslim-led
                projects.
              </div>
            </div>
            <div className="flex pb-[10px]">
              <div>
                <div className="relative w-[60px]">
                  <Image src={benefit03} alt="benefit 03" />
                </div>
              </div>
              <div className="text-[12px] sm:text-[14px] leading-5 ml-[10px]">
                <div>
                  <b>Empowering Islamic Initiatives:</b>
                </div>
                Your contribution aligns with Islamic financial principles,
                ensuring our school is built on Halal Funds and avoiding Riba
                (exploitation/interest). It empowers our community and future
                generations.
              </div>
            </div>
            <div className="full-w flex justify-center">
              <DialogTrigger asChild>
                <Button className="font-bebas text-[22px] uppercase w-full bg-[#D6B623] my-[16px] max-w-[350px]">
                  Sign up <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </DialogTrigger>
            </div>
          </div>
          <div
            id="qard-bottom"
            className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
            <Image
              src={qardBottom}
              alt="Front school"
              fill={true}
              className="object-cover"
            />
          </div>
          <div id="terms" className="py-[16px] px-4 lg:px-0">
            <h2 className="font-bebas text-[24px] sm:text-[28px] text-center text-[#D6B623]">
              The Terms
            </h2>
            <div className="flex pb-[10px]">
              <div>
                <div className="relative w-[60px]">
                  <Image src={term01} alt="term 01" />
                </div>
              </div>
              <div className="text-[12px] sm:text-[14px] leading-5 ml-[10px]">
                <div>
                  <b>Due-on-Demand</b>
                </div>
                We commit to a full refund upon demand through a legally binding
                and confidential contract. This is a money-back guarantee.
              </div>
            </div>
            <div className="flex pb-[10px]">
              <div>
                <div className="relative w-[60px]">
                  <Image src={term02} alt="term 02" />
                </div>
              </div>
              <div className="text-[12px] sm:text-[14px] leading-5 ml-[10px]">
                <div>
                  <b>Flexible Payment Options</b>
                </div>
                Conveniently contribute via cheque, cash, wire transfer or
                credit/debit card.
              </div>
            </div>
            <div className="flex pb-[10px]">
              <div>
                <div className="relative w-[60px]">
                  <Image src={term03} alt="term 03" />
                </div>
              </div>
              <div className="text-[12px] sm:text-[14px] leading-5 ml-[10px]">
                <div>
                  <b>Payback Method</b>
                </div>
                Your money will be returned upon demand in the form of a cheque
                upon your request.
              </div>
            </div>
            <div className="full-w flex justify-center">
              <DialogTrigger asChild>
                <Button className="font-bebas text-[22px] uppercase w-full bg-[#D6B623] my-[16px] max-w-[350px]">
                  Sign up <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </DialogTrigger>
            </div>
          </div>
          <div id="shape" className="px-4 bg-[#2EB774] py-[10px]">
            <h2 className="font-bebas text-[24px] sm:text-[28px] text-center text-white">
              LET’S SHAPE A BRIGHTER FUTURE TOGETHER
            </h2>
            <p className="text-[13px] sm:text-[15px] leading-5 text-white">
              <div className="text-center pb-[5px]">
                <b>Join the Movement!</b>
              </div>
              By joining our movement and participating in Qard Al-Hasan, you
              embody the best of Islamic principles, practice the Sunnah of our
              beloved Prophet Muhammad (pbuh), and are contributing to the New
              School Project for the Edmonton Islamic Academy - Elementary
              Campus. For the sake of our children and future generations join
              us in building a great legacy of Islamic education of faith and
              knowledge! This is Sadaqa Jariya - everlasting bounty and
              goodness, to those who contribute in this initiative as the
              knowledge learned and shared is perpetual, insha’ Allah.
            </p>
          </div>
          <div
            id="footer-img"
            className="relative h-[200px] sm:h-[250px] lg:h-[300px]">
            <Image
              src={footer}
              alt="Hall"
              fill={true}
              className="object-cover"
            />
          </div>
          <div
            id="footer-contact"
            className="px-4 lg:px-0 bg-black py-[20px] text-center">
            <div className="text-white text-[11px] sm:text-[13px]">
              For comments and questions, email{" "}
              <Link
                href="mailto:nsp@islamicacademy.ca"
                target="blank"
                className="underline">
                nsp@islamicacademy.ca
              </Link>
            </div>
            <div className="text-white text-[11px] sm:text-[13px]">
              Join us in building a legacy of Islamic education and tradition!
            </div>
          </div>
        </div>
      </main>
      <DialogContent className="sm:min-w-[625px] bg-slate-50">
        <SubmitForm />
      </DialogContent>
    </Dialog>
  );
}
