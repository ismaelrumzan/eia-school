export function H2_highlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`prose font-bebas ${className}`}>
      <h2 className="text-[#B29F5D] text-[24px] my-0">{children}</h2>
    </div>
  );
}
