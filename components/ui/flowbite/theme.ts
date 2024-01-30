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

export const eiaTheme2: CustomFlowbiteTheme = {
  carousel: {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
    indicators: {
      wrapper:
        "absolute bottom-14 sm:bottom-16 left-1/2 flex -translate-x-1/2 space-x-3",
    },
  },
};
