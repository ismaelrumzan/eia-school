"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { H2_highlight } from "@/components/ui/typography/h2-highlight";

export function CarouselVideo({
  id,
  text,
  showCaption = true,
  muted = false,
  params = '',
}: {
  id: string;
  text: string;
  showCaption?: boolean;
  params?: string;
  muted?: boolean;
}): JSX.Element {
  return (
    <div>
      <LiteYouTubeEmbed id={id} title={text} params={params} muted={muted}/>
      {showCaption ? <H2_highlight className="pt-2 text-center">{text}</H2_highlight> : null}
    </div>
  );
}
