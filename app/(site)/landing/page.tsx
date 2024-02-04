import { getLandingPage } from "@/sanity/sanity-utils";
import { Hero } from "@/components/ui/blocks/hero";
import { HeroType } from "@/types/LandingPage";

export default async function Page() {
  const pageData = await getLandingPage("home-page");
  //Iterate through each element of pageData.pageBuilder and based on the type, use the appropriate component to display it
  //Then add each block type
  //How can we include a layout element to be able to have 2 blocks in a row? (Extra)
  return (
    <>
      <div className="w-full bg">
        <p className="py-2 bg-[#094931] text-center text-white capitalize tracking-wide">
          News & information coming soon...
        </p>
        {pageData.pageBuilder && pageData.pageBuilder.length > 0 && (
          <>
            {pageData.pageBuilder.map((block) => {
              if (block._type === "hero") {
                return <Hero block={block as HeroType} key={block.heading} />;
              }
            })}
          </>
        )}
      </div>
    </>
  );
}
