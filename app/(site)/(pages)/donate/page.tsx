import { DonationForm } from "@/components/ui/donation-form";
import { ContactAlert } from "@/components/ui/contact-alert";
import { H1 } from "@/components/ui/typography/h1";

export default function Page() {
  return (
    <div className="pb-4">
      <H1 className="my-3">Donate</H1>
      <div className="mb-2">
        <ContactAlert />
      </div>
      <DonationForm />
    </div>
  );
}
