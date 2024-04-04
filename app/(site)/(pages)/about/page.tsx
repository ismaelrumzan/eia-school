import { CarouselVideo } from "@/components/ui/carousel-video";
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
            <div className="p-2">
                <CarouselVideo id="dEDcNA-vHvo" text="About the Edmonton Islamic Academy - Elementary Campus" params="start=90" />
            </div>
        </>
    );
}
