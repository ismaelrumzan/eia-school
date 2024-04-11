import { SubmitForm } from "@/components/ui/submit-form";
import { H1 } from "@/components/ui/typography/h1";

export default function Page() {
  return (
    <div className="pb-4">
    <H1 className="my-3">Become an Ambassador</H1>
      <SubmitForm src="https://docs.google.com/forms/d/e/1FAIpQLSf0kBX93_BIeh7suBaGVrcqth4HRX_jUCxoP4XM--Ehca1C2Q/viewform?embedded=true" />
    </div>
  );
}
