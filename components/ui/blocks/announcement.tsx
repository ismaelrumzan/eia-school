import { AnnouncementType } from "@/types/LandingPage";

export function Announcement({ block }: { block: AnnouncementType }): JSX.Element {
    return (
        <div className="w-full">
            <p className="py-2 bg-[#094931] text-center text-white capitalize tracking-wide">
                {block.message}
            </p>
        </div>
    )
}