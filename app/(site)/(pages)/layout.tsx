export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-3 py-2 sm:py-3 sm:px-6">{children}</div>;
}
