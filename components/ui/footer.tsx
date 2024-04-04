import Link from "next/link";
import { Alert } from "flowbite-react";
import { Megaphone } from "lucide-react";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { FunctionComponent, SVGProps } from "react";
export function Footer(): JSX.Element {
  return (
    <div>
      <div className="flex justify-center bg-[#094931] pt-4">
        <Alert color="success" className="mb-3 max-w-md" icon={Megaphone as FunctionComponent<SVGProps<SVGSVGElement>>} additionalContent={<AlertContent />}>
          <span className="font-bold">3 Ways</span> to Make a Difference
        </Alert>
      </div>
      <div
        id="footer-contact"
        className="px-4 bg-[#094931] py-[20px] text-center border-b-[6px] border-[#BDAA65] fixed bottom-0 w-full max-w-screen-xl drop-shadow">
        <div className="text-white text-[11px] sm:text-[13px]">
          For comments and questions, email{" "}
          <Link
            href="mailto:nsp@islamicacademy.ca"
            target="blank"
            className="underline hover:no-underline">
            nsp@islamicacademy.ca
          </Link>{" "}
          |{" "}
          <Link
            href="https://www.islamicacademy.ca/"
            className="underline hover:no-underline">
            Edmonton Islamic Academy
          </Link>
        </div>
      </div>
    </div>

  );
}

function AlertContent(): JSX.Element {
  return (
    <div className="flex">
      <div>Qard al Hasan | Donate | Become an Ambassador</div>
      <CTAButton href="/ambassador">Sign Up Today!</CTAButton>
    </div>
  )
}
