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
      <SubmitForm />
    </>
  );
}
