import { SubmitForm } from "@/components/ui/submit-form";
import { H1 } from "@/components/ui/typography/h1";

export default function Page() {
  return (
    <div className="pb-4">
    <H1 className="my-3">Sign up to contribute</H1>
      <SubmitForm src="https://docs.google.com/forms/d/e/1FAIpQLSfz6JefXeoYDbSZpjJ_E8LW0_KkAAQ4OhX0pyG8cksv4ilYIg/viewform?embedded=true" />
    </div>
  );
}