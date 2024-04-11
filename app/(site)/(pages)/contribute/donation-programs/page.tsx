import { H1 } from "@/components/ui/typography/h1";
import { H2 } from "@/components/ui/typography/h2";
import { H3 } from "@/components/ui/typography/h3";
import { ContactAlert } from "@/components/ui/contact-alert";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { TableMain, Table1, Table2, Table3 } from "./tables";
import { CarouselItem } from "@/components/ui/carousel-item";

export default function Page() {
  return (
    <>
      <H1>Donation Programs</H1>
      <H2>Empower Our Future</H2>
      <div className="my-2">
        <ContactAlert />
      </div>
      <section className="prose max-w-none">
        <p>
          You have the flexibility to shape the impact of your generosity.
          Whether you prefer spreading your donation over four years or
          contributing all at once, the choice is yours.
        </p>
        <p>
          Maximize the impact of your generosity! Your donations are not only
          tax deductible but also an opportunity to fulfill your zakat
          obligations. According to our scholars, contributing to the school
          falls under &apos;In the Cause of Allah (Fi Sabilillah)&apos;,
          supporting education and empowering our community.
        </p>
      </section>
      <div className="flex justify-center px-3 sm:px-0 my-4">
        <CTAButton gtmEvent="donate-donation-programs" href="/donate">
          Donate today
        </CTAButton>
      </div>

      <H2>See how it works</H2>
      <TableMain />
      <H3>Double Your Impact</H3>
      <section className="prose max-w-none">
        <p>
          Starting with a $100,000 pledge for one year? Keep the same monthly
          amount, and in just two years, your support will double to $200,000.
        </p>
      </section>
      <Table1 />
      <div className="my-2">
        <ContactAlert />
      </div>
      <H3>4X Your Influence:</H3>
      <section className="prose max-w-none">
        <p>
          Pledging $50,000 for one year is fantastic. Stick with the same
          monthly pledge, and over four years, your contribution will quadruple
          to an impressive $200,000.
        </p>
      </section>
      <Table2 />
      <H3>2X Your Legacy with a Small Change</H3>
      <section className="prose max-w-none">
        <p>
          For just a little more each month—$104 to be exact—over four years,
          your $5,000 pledge will double to $10,000. Small change, big
          transformation.
        </p>
      </section>
      <Table3 />
      <div className="flex justify-center px-3 sm:px-0 my-4">
        <CTAButton gtmEvent="donate-donation-programs" href="/donate">
          Donate Today
        </CTAButton>
      </div>
      <CarouselItem src="/gallery/exterior-02.jpg" text="school" />
      <section className="prose max-w-none">
        <p>
          For those contributing less than $10,000, convenient setups can be
          arranged through the Al-Rashid Mosque. By breaking down your giving
          potential over the years, the cumulative impact grows significantly.
          We invite you to give generously, trusting that the rewards
          reciprocated will be generous, insha’Allah.
        </p>
      </section>
      <div className="flex justify-center px-3 sm:px-0 my-4">
        <CTAButton gtmEvent="donate-donation-programs" href="/donate">
          Donate Today
        </CTAButton>
      </div>
    </>
  );
}
