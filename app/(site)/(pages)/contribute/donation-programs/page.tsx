import { H1 } from "@/components/ui/typography/h1";
import { H2 } from "@/components/ui/typography/h2";
import { CTAButton } from "@/components/ui/buttons/cta-button";

export default function Page() {
  return (
    <>
      <H1>Monthly donation programs</H1>
      <H2>Spread your donation over 4 years or all at once</H2>
      <ul className="prose list-disc pl-4 pr-2">
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
      <div className="flex flex-col py-3">
        <CTAButton href="https://www.canadahelps.org/en/charities/canadian-islamic-centre/">
          Sign up
        </CTAButton>
      </div>
    </>
  );
}
