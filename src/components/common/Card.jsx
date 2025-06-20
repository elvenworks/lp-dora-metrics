export default function Card({
  children,
  className = "",
  hover = false,
  purple = false,
  ...props
}) {
  const baseClasses = purple
    ? "bg-primary-gradient text-primary-foreground rounded-md p-6"
    : "bg-white txt-primary rounded-md border border-color-primary p-6";

  return (
    <div
      className={`${baseClasses} ${hover ? "card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
