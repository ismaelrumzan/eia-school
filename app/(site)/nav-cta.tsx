'use client';
import { usePathname } from 'next/navigation'
import { NavButton } from "@/components/ui/buttons/nav-button";
import { ArrowRight, SendHorizonal } from "lucide-react";

export function NavCTA(): JSX.Element {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <>
            {pathname === "/donate" ? <NavButton href="/contact">
                Contact
                <SendHorizonal className='ml-1 w-4 h-4'/></NavButton> : <NavButton href="/donate">
                Donate
                <ArrowRight className='ml-1 w-4 h-4'/>
            </NavButton>}
        </>
    )
}