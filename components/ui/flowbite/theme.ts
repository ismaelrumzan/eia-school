import type { CustomFlowbiteTheme } from "flowbite-react";

export const eiaTheme: CustomFlowbiteTheme = {
  button: {
    base: "text-[20px]",
    color: {
      primary: "bg-[#C6BB79] hover:bg-[#28AE6F] hover:text-white",
    },
  },
  navbar: {
    link: {
      active: {
        off: "text-[#094931] hover:underline hover:[#094931]",
      },
    },
  },
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  },
};
