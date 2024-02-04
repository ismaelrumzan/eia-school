import { getLandingPage } from "@/sanity/sanity-utils";
import { Hero } from "@/components/ui/blocks/hero";
import { Icons } from "@/components/ui/blocks/icons";
import { AnnouncementType, HeroType, IconsType } from "@/types/LandingPage";
import { Announcement } from "@/components/ui/blocks/announcement";

export default async function Page() {
  const pageData = await getLandingPage("home-page");
  //Iterate through each element of pageData.pageBuilder and based on the type, use the appropriate component to display it
  //Then add each block type
  //How can we include a layout element to be able to have 2 blocks in a row? (Extra)
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
            })}
          </>
        )}
      </div>
    </>
  );
}
