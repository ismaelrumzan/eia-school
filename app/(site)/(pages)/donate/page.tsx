import { DonationForm } from "@/components/ui/donation-form";
import { H1 } from "@/components/ui/typography/h1";

export default function Page() {
  return (
    <div className="pb-4">
    <H1 className="my-3">Donate</H1>
      <DonationForm />
    </div>
  );
}
