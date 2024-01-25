export function H2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`prose ${className}`}>
      <h2 className="text-[#004830] text-[20px] pt-1 mb-0 mt-0">{children}</h2>
    </div>
  );
}

export function H2_light({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`prose ${className}`}>
      <h2 className="text-white text-[20px] pt-1 mb-0 mt-0">{children}</h2>
    </div>
  );
}
