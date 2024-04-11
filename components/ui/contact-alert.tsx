import { Alert } from "flowbite-react";
import Link from "next/link";
import { MessageCircleQuestion } from "lucide-react";
import { FunctionComponent, SVGProps } from "react";

export function ContactAlert(): JSX.Element {
  return (
    <Alert
      color="info"
      className="mb-3 max-w-md"
      icon={
        MessageCircleQuestion as FunctionComponent<SVGProps<SVGSVGElement>>
      }>
      Questions about donating?{" "}
      <Link href="/contact" className="underline hover:no-underline font-bold">
        Get in touch!
      </Link>
    </Alert>
  );
}
