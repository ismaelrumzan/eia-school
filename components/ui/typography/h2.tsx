export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`prose ${className}`}>
      <h1 className="text-[#004830] text-[20px] mb-0">{children}</h1>
    </div>
  );
}
