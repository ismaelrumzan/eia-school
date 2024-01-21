export function H2_highlight({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="prose font-bebas">
      <h1 className="text-[#B29F5D] text-[24px] mb-0">{children}</h1>
    </div>
  );
}
