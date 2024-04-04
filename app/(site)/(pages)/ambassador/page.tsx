import { SubmitForm } from "@/components/ui/submit-form";
import { ArrowLeft } from "lucide-react";
import { NavButton } from "@/components/ui/buttons/nav-button";

export default function Page() {
  return (
    <>
      <div className="pl-3 mb-3">
        <NavButton href="/">
          <ArrowLeft />
        </NavButton>
      </div>
      <SubmitForm src="https://docs.google.com/forms/d/e/1FAIpQLSf0kBX93_BIeh7suBaGVrcqth4HRX_jUCxoP4XM--Ehca1C2Q/viewform?embedded=true" />
    </>
  );
}
