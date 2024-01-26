import Link from "next/link";
export function Footer(): JSX.Element {
  return (
    <div
      id="footer-contact"
      className="px-4 bg-[#094931] py-[20px] text-center border-b-[6px] border-[#BDAA65] fixed bottom-0 w-full max-w-[768px] drop-shadow">
      <div className="text-white text-[11px] sm:text-[13px] ">
        For comments and questions, email{" "}
        <Link
          href="mailto:nsp@islamicacademy.ca"
          target="blank"
          className="underline">
          nsp@islamicacademy.ca
        </Link>
      </div>
    </div>
  );
}
