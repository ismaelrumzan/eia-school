import { getLandingPage } from "@/sanity/sanity-utils";
import { Hero } from "@/components/ui/blocks/hero";
import { Icons } from "@/components/ui/blocks/icons";
import { AnnouncementType, ColumnsType, HeroType, IconsType, ImageHightlightType } from "@/types/LandingPage";
import { Announcement } from "@/components/ui/blocks/announcement";
import { Columns } from "@/components/ui/blocks/columns";
import { ImageHighlight } from "@/components/ui/blocks//image-highlight";

export default async function Page() {
  const pageData = await getLandingPage("home-page");
  console.log(pageData);
  return (
    <>
      <div className="w-full bg">
        {pageData.pageBuilder && pageData.pageBuilder.length > 0 && (
          <>
            {pageData.pageBuilder.map((block) => {
              if (block._type === "announcement") {
                return <Announcement block={block as AnnouncementType} key={block._type} />;
              }
              if (block._type === "hero") {
                return <Hero block={block as HeroType} key={block._type} />;
              }
              if (block._type === "icons") {
                return <Icons block={block as IconsType} key={block._type}/>;
              }
              if (block._type === "columns") {
                return <Columns block={block as ColumnsType} key={block._type}/>;
              }
              if (block._type === "image-highlight") {
                return <ImageHighlight block={block as ImageHightlightType} key={block._type}/>;
              }
            })}
          </>
        )}
      </div>
    </>
  );
}
