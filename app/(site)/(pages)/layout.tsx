export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-3 py-2 sm:p-3">{children}</div>;
}
