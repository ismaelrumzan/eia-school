import { DonationForm } from "@/components/ui/donation-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="ml-[10px]">
        <Button
          asChild
          className="font-bebas text-[16px] uppercase bg-[#D6B623] my-[8px]">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
      <DonationForm />
    </>
  );
}
