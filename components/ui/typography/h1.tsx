export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`prose font-bebas ${className}`}>
      <h1 className="text-[#004830] text-[32px] mb-0">{children}</h1>
    </div>
  );
}
