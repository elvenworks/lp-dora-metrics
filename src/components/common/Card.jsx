export default function Card({
  children,
  className = "",
  hover = false,
  purple = false,
  borderColor = true,
  ...props
}) {
  const baseClasses = purple
    ? "bg-primary-gradient text-primary-foreground rounded-md p-6"
    : `txt-primary rounded-md border ${
        borderColor && "border-color-primary"
      } p-6`;

  return (
    <div
      className={`${baseClasses} ${hover ? "card-hover" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
