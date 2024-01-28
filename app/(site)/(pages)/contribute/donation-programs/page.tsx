import { H1 } from "@/components/ui/typography/h1";
import { H2 } from "@/components/ui/typography/h2";
import { CTAButton } from "@/components/ui/buttons/cta-button";

export default function Page() {
  return (
    <>
      <H1>Monthly donation programs</H1>
      <H2>Spread your donation over 4 years or all at once</H2>
      <section className="prose max-w-none">
        <ul className="list-disc">
          <li>You choose your terms</li>
          <li>
            76 Rooms need to be built, that are listed as $200,000 per room that
            the donation amount can be spread over 4 years
          </li>
          <li>
            Similarly, donation amounts of 10,000 and above can be spread over 4
            years as per your request
          </li>
        </ul>
      </section>
      <div className="flex justify-center px-3 sm:px-0 mb-3">
        <CTAButton href="/donate">Sign up</CTAButton>
      </div>
    </>
  );
}