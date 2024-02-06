import { ColumnsType } from "@/types/LandingPage";
import { Carousel } from "flowbite-react";
import config from "@/sanity/config/client-config";
import imageUrlBuilder from "@sanity/image-url";
import { H1 } from "../typography/h1";
import { H2 } from "../typography/h2";
import { DonationItem } from "../donation-item";

const builder = imageUrlBuilder(config);

export function Columns({ block }: { block: ColumnsType }): JSX.Element {
    return (
        <>
            <div id="donation" className="py-4 px-2 flex flex-col bg-[#28AE6F]">
                <H1 className="text-center">{block.headline}</H1>
                <H2 className="text-center">{block.subtitle}</H2>
                {block.columns && block.columns.length > 0 &&
                    <div className="h-[300px]">
                        <Carousel slide={false} indicators={false}>
                            {block.columns.map(column => (
                                <DonationItem key={column.title}
                                    src={builder.image(column.image).url()}
                                    title={column.title}
                                    description={column.subtitle}
                                    button={{
                                        text: column.ctabutton.text,
                                        href: column.ctabutton.href,
                                    }}
                                />
                            ))}
                        </Carousel>
                    </div>
                }
            </div>
        </>
    )
}