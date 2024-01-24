"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { H2_highlight } from "@/components/ui/typography/h2-highlight";

export function CarouselVideo({
  id,
  text,
}: {
  id: string;
  text: string;
}): JSX.Element {
  return (
    <div>
      <LiteYouTubeEmbed id={id} title={text} />
      <H2_highlight>{text}</H2_highlight>
    </div>
  );
}
