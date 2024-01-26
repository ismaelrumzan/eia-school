export function H3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`prose ${className}`}>
      <h3 className="capitalize font-semibold text-black text-[16px] pt-1 mb-0 mt-0">
        {children}
      </h3>
    </div>
  );
}

export function H3_light({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`prose ${className}`}>
      <h2 className="capitalize font-semibold text-white text-[16px] pt-1 mb-0 mt-0">
        {children}
      </h2>
    </div>
  );
}
