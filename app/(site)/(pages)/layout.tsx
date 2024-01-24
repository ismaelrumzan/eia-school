export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-3">{children}</div>;
}
