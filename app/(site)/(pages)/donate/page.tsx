import { DonationForm } from "@/components/ui/donation-form";
import { Alert } from "flowbite-react";
import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import { FunctionComponent, SVGProps } from "react";
import { H1 } from "@/components/ui/typography/h1";

export default function Page() {
  return (
    <div className="pb-4">
      <H1 className="my-3">Donate</H1>
      <div className="mb-2">
        <Alert color="info" className="mb-3 max-w-md" icon={MessageCircleQuestion as FunctionComponent<SVGProps<SVGSVGElement>>}>
          Questions about donating? <Link href="/contact" className="underline hover:no-underline font-bold">Get in touch!</Link>
        </Alert>
      </div>
      <DonationForm />
    </div>
  );
}
