import { H1 } from "@/components/ui/typography/h1";
import { H2 } from "@/components/ui/typography/h2";
import { H3 } from "@/components/ui/typography/h3";
import { CTAButton } from "@/components/ui/buttons/cta-button";
import { Quote } from "lucide-react";

export default function Page() {
  return (
    <>
      <H1>Qard Hasan</H1>
      <H2 className="py-2" id="qard-hasan">
        The Good Loan
      </H2>
      <div className="flex justify-center full-w mb-3">
        <div>
          <div className="flex pt-[16px] pb-[5px]">
            <div className="self-start">
              <Quote size={20} className="text-[#855247] rotate-180" />
            </div>
            <p className="text-[14px] text-center sm:text-[18px] text-[#855247] px-[10px] max-w-[450px]">
              Who is it that will lend to Allah a good loan which Allah will
              multiply many times over for them, and they will have an honorable
              reward
            </p>
            <div className="self-end">
              <Quote size={20} className="text-[#855247]" />
            </div>
          </div>
          <p className="text-center text-[12px] sm:text-[14px] text-[#31c8ad]">
            Quran 57:11
          </p>
        </div>
      </div>
      <p>
        Qard Hasan, or &quot;Good Loan&quot; in Islamic finance is a form of
        interest-free lending. It&apos;s a charitable act meant to assist
        someone in need without expecting any profit in return. The borrower is
        required to repay only the borrowed amount, without any additional
        charges or interest. This is a legal contract between the borrower,
        Al-Rashid, and you. Your support paves the way for a brighter,
        faith-centric future.
      </p>
      <div className="flex flex-col py-3">
        <CTAButton href="/qard-hassan">Sign up for qard hasan</CTAButton>
      </div>
      <H2>Rewarding benefits</H2>
      <ol className="prose list-decimal pl-4 pr-2">
        <li>
          The Qur'an emphasizes Qard Hasan (6 times), promising abundant rewards
          and forgiveness for those contributing to a charitable cause
        </li>
        <li>
          Participate in reviving a practice of Prophet Muhammad (PBUH) by
          giving a good loan, fostering community, and supporting Muslim-led
          projects
        </li>
        <li>
          Contribute to the establishment of a new elementary Islamic school,
          aligning with Islamic financial principles and avoiding interest. This
          act ensures that our school is built on Halal Funds, avoiding Riba and
          making your contribution even more rewarding
        </li>
      </ol>
      <H2>Contract terms</H2>
      <ul className="prose list-disc pl-4 pr-2">
        <li>
          Money-back Guarantee - We commit to a full refund upon demand through
          a legally binding and confidential contract
        </li>
        <li>
          Flexible Payment Options - Accepting funds via wire transfer, credit
          card, or cash
        </li>
        <li>
          Payback Method - Your money will be returned within two weeks in the
          form of a cheque upon your request.
        </li>
      </ul>
      <div className="flex flex-col py-3">
        <CTAButton href="/qard-hassan">Sign up for qard hasan</CTAButton>
      </div>
    </>
  );
}
