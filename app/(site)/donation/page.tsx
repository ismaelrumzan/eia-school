/* eslint-disable react/no-unescaped-entities */
import Script from "next/script";
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
      <div id="blackbaud-donation-form_463ff1d3-3592-4ac2-9aa1-5b86f85b4ca6"></div>
      <Script src="https://sky.blackbaudcdn.net/static/donor-form-loader/2/main.js"></Script>
      <Script id="donation-form">
        BBDonorFormLoader.newBlackbaudDonationFormZoned('renxt','p-MmjbOKJ57ki31wFtZ537jQ',
        '463ff1d3-3592-4ac2-9aa1-5b86f85b4ca6','can')
      </Script>
    </>
  );
}
