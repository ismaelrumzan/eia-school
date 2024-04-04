export function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`font-bebas ${className}`}>
      <h1 className="capitalize text-[#004830] text-[32px] sm:text-[36px] mb-0 leading-tight">
        {children}
      </h1>
    </div>
  );
}

export function H1_light({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className={`font-bebas ${className}`}>
      <h1 className="text-white text-[32px] sm:text-[36px] mb-0">{children}</h1>
    </div>
  );
}
