'use client';
import { Alert } from "flowbite-react";
import { usePathname } from 'next/navigation'
import { Megaphone } from "lucide-react";
import { FunctionComponent, SVGProps } from "react";
import { CTAButton } from "@/components/ui/buttons/cta-button";

export function FooterAlert(): JSX.Element {
    const pathname = usePathname();
    return (
        <div className={`flex justify-center ${pathname === "/" ? `bg-[#094931]` : `mb-4`}`}>
            <Alert color="success" className="mb-3 max-w-md" icon={Megaphone as FunctionComponent<SVGProps<SVGSVGElement>>} additionalContent={<AlertContent />}>
                <span className="font-bold">3 Ways</span> to Make a Difference
            </Alert>
        </div>
    )
}

function AlertContent(): JSX.Element {
    return (
        <div className="flex flex-col sm:flex-row gap-2">
            <div>Qard al Hasan | Donate | Become an Ambassador</div>
            <CTAButton href="/contribute">Sign Up Today!</CTAButton>
        </div>
    )
}