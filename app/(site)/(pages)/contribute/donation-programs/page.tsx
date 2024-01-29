import { H1 } from "@/components/ui/typography/h1";
import { H2 } from "@/components/ui/typography/h2";
import { H3 } from "@/components/ui/typography/h3";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { TableMain, Table1, Table2, Table3 } from "./tables";
import { CarouselItem } from "@/components/ui/carousel-item";

export default function Page() {
  return (
    <>
      <H1>Donation Programs</H1>
      <H2>Empower Our Future</H2>
      <section className="prose max-w-none">
        <p>
          Through the EIA donation program. You have the flexibility to shape
          the impact of your generosity. Whether you prefer spreading your
          donation over four years or contributing all at once, the choice is
          yours.
        </p>
        <p>
          Specifically, 73 rooms are identified, each representing a $200,000
          donation. This contribution can be distributed over four years at
          50,000 per year to accommodate your preferences. Additionally,
          donations of $10,000 and above are also eligible for a four-year
          spreading option based on your request.
        </p>
      </section>
      <div className="flex justify-center px-3 sm:px-0 mb-3">
        <CTAButton href="/donate">Donate today</CTAButton>
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
      <div className="flex justify-center px-3 sm:px-0 my-3">
        <CTAButton href="/donate">Donate Today</CTAButton>
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
      <div className="flex justify-center px-3 sm:px-0 my-3">
        <CTAButton href="/donate">Donate Today</CTAButton>
      </div>
    </>
  );
}
