export function H2_highlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`font-bebas ${className}`}>
      <h2 className="text-[#B29F5D] text-[24px] sm:text-[28px] my-0">
        {children}
      </h2>
    </div>
  );
}
