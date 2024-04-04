export function SubmitForm({ src }: { src: string }) {
  return (
    <iframe
      loading="lazy"
      allowFullScreen
      src={src}
      height="100%"
      width="100%"
      className="min-h-[calc(100vh-288px)] sm:min-w-[600px]">
      Loading…
    </iframe>
  );
}
