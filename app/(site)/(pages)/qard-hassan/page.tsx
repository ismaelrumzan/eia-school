import { SubmitForm } from "@/components/ui/submit-form";
import { H1 } from "@/components/ui/typography/h1";

export default function Page() {
  return (
    <div className="pb-4">
    <H1 className="my-3">Qard Hassan</H1>
      <SubmitForm src="https://docs.google.com/forms/d/e/1FAIpQLSfnBGf3yezoNCQf0hcrWeSsMr7aN12gkpeUB6VeNXiLEPA3wA/viewform?embedded=true"/>
    </div>
  );
}
